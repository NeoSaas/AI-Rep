from django.urls import path
from . import views

urlpatterns = [
    path('api/bot-action/', views.bot_action, name='bot-action'),
]

