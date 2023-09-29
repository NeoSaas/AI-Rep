from rest_framework import serializers
from .models import Conversation

class ConversationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Conversation
        fields = '__all__'
        
class ConversationStatSerializer(serializers.ModelSerializer):
    date = serializers.DateField()
    class Meta:
        model = Conversation
        fields = ['date']
