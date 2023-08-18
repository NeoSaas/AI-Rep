from django.shortcuts import render
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth import authenticate, login, logout
from django.http import JsonResponse
from django.conf import settings
import requests

def index(request):
    tag_to_monitor = 'your_tag_name'
    conversations = fetch_conversations(tag_to_monitor)
    
    return JsonResponse({'conversations': conversations})


@api_view(['POST'])
def bot_action(request):
    #bot actions
    bot_response = "Bot's response here"
    return Response({'response': bot_response})

def fetch_conversations(tag):
    #get re:amaze conversations by tag
    url = 'https://api.reamaze.com/v1/conversations.json'
    headers = {'Authorization': f'Bearer {settings.REAMAZE_API_KEY}'}
    params = {'q[filter]': f'tag:{tag}'}

    response = requests.get(url, headers=headers, params=params)
    return response.json()['conversations']

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
@permission_classes([IsAuthenticated])
def logout_view(request):
    #logout
    logout(request)
    return JsonResponse({'message': 'Logout successful'})