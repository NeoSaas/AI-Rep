from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('api/bot-action/', views.bot_action, name='bot-action'),
]

