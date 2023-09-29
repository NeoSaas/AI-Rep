from django.contrib import admin
from api.models import Conversation, ConversationStatistics

# Register your models here.
admin.site.register(Conversation)
admin.site.register(ConversationStatistics)
