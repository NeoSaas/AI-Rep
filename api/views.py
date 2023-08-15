from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.http import JsonResponse
from django.conf import settings
import requests

def index(request):
    tag_to_monitor = 'your_tag_name'
    conversations = fetch_conversations(tag_to_monitor)
    
    return JsonResponse({'conversations': conversations})


@api_view(['POST'])
def bot_action(request):
    # Process bot actions and interact with the language model here
    # You can extract data from request.data to get input for the bot
    # Perform actions and get bot responses
    bot_response = "Bot's response here"
    return Response({'response': bot_response})

def fetch_conversations(tag):
    url = 'https://api.reamaze.com/v1/conversations.json'
    headers = {'Authorization': f'Bearer {settings.REAMAZE_API_KEY}'}
    params = {'q[filter]': f'tag:{tag}'}

    response = requests.get(url, headers=headers, params=params)
    return response.json()['conversations']
