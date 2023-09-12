from django.db import models

# Create your models here.

class Conversation(models.Model):
    id = models.CharField(max_length=255, unique=True, default="00000000", primary_key=True)
    reamaze_url = models.TextField()
    name = models.CharField(max_length=255)
    ai_message = models.TextField()
    human_message = models.TextField()
    date = models.DateTimeField(auto_now_add=True)
    tags = models.CharField(max_length=255)  # You can use a ManyToManyField for tags for more flexibility

    def __str__(self):
        return self.name
    