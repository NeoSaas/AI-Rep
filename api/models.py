from django.db import models

# Create your models here.

class Conversation(models.Model):
    id = models.CharField(max_length=255, unique=True, default="00000000", primary_key=True)
    reamaze_url = models.URLField()
    name = models.CharField(max_length=255)
    ai_message = models.TextField()
    human_message = models.TextField()
    date = models.DateTimeField(auto_now_add=True)
    tags = models.CharField(max_length=255)  # you can use a ManyToManyField for tags for more flexibility

    def __str__(self):
        return self.name
    
class ConversationStatistics(models.Model):
    tag = models.CharField(max_length=255, default = "test1")
    conversation_count = models.PositiveIntegerField(default=0)  # Number of conversations
    
    class Meta:
        verbose_name_plural = "Conversation Statistics"

    def __str__(self):
        return self.tag
    
    
    
    