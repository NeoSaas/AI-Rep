from django.db import models

# Create your models here.

class Conversation(models.Model):
    code = models.CharField(default="", max_length=8, unique=True)
    
    