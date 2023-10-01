from django.shortcuts import render
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth import authenticate, login, logout
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.conf import settings
from rest_framework import status
from .models import Conversation, ConversationStatistics
from .serializers import ConversationStatSerializer, ConversationSerializer
from rest_framework.views import APIView
from django.core.management import call_command
import requests

def index(request):
    tag_to_monitor = 'your_tag_name'
    # conversations = fetch_conversations(tag_to_monitor)
    
    return JsonResponse({'conversations': 'test'})


@api_view(['POST'])
def bot_action(request):
    #respond to email
    bot_response = "Bot's response here"
    return Response({'response': bot_response})

@api_view(['POST'])
def login_view(request):
    #login 
    username = request.data.get('username')
    password = request.data.get('password')
    user = authenticate(request, username=username, password=password)
    if user is not None:
        login(request, user)
        return JsonResponse({'message': 'Login successful'})
    else:
        return JsonResponse({'message': 'Login failed'}, status=401)

@api_view(['POST'])
def logout_view(request):
    #logout
    logout(request)
    return JsonResponse({'message': 'Logout successful'})

@api_view(['GET'])
def conversation_list(request):
    conversations = Conversation.objects.all()
    serializer = ConversationSerializer(conversations, many=True)
    return JsonResponse(serializer.data, safe=False)

@api_view(['POST'])
def generate_and_add_conversation(request):
    # Create a new conversation
    new_conversation = Conversation(
        name="New Conversation",  
        ai_message="AI response",
        human_message="User message",
        tags=["tag1", "tag2"],  
    )
    
    new_conversation.save()

    serializer = ConversationSerializer(new_conversation)
    
    return Response(serializer.data, status=status.HTTP_201_CREATED)

class ReamazeWebhook(APIView):
    def post(self, request):
        data = request.data

        # Extract relevant information from the JSON response
        conversation_id = data['slug']
        reamaze_url = data['perma_url']
        customer_message = data['message']['body']
        tags = data.get('tag_list', [])

        try:
            existing_conversation = Conversation.objects.get(id=conversation_id)
            existing_conversation.reamaze_url = reamaze_url
            existing_conversation.customer_message = customer_message
            existing_conversation.tags = tags
            existing_conversation.save()

            return Response({'message': 'Conversation updated successfully.'}, status=status.HTTP_200_OK)

        except Conversation.DoesNotExist:
            new_conversation = Conversation(
                id=conversation_id,
                reamaze_url=reamaze_url,
                human_message=customer_message,
                tags=tags
            )
            new_conversation.save()

            return Response({'message': 'New conversation created successfully.'}, status=status.HTTP_201_CREATED)

def conversation_stats(request):
    call_command('calc_stats')
    stats = ConversationStatistics.objects.all()
    data = [{'tag': stat.tag, 'count': stat.conversation_count} for stat in stats]

    return JsonResponse({'data': data})

class UpdateReamazeConversation(APIView):
    def put(self, request, slug):
        login_email = settings.REAMAZE_LOGIN
        api_token = settings.REAMAZE_API_KEY

        #endpoint
        reamaze_url = f'https://{settings.REAMAZE_BRAND}.reamaze.io/api/v1/conversations/{slug}'

        #put data
        data = {
            "conversation": {
                "assignee": {"email": "staff1@example.com"},
                "tag_list": ["tag1", "tag2"],
                "status": 0,
                "data": {"field1": "value1", "field2": "value2"}
            }
        }

        #put request
        response = requests.put(
            reamaze_url,
            auth=(login_email, api_token),
            headers={'Accept': 'application/json', 'Content-type': 'application/json'},
            json=data
        )

        if response.status_code == 200:
            return Response({'message': 'Conversation updated successfully.'}, status=status.HTTP_200_OK)
        else:
            return Response({'message': 'Failed to update conversation.'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
