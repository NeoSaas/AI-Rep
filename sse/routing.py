from django.urls import re_path
from consumers import StatsConsumer
from channels.routing import ProtocolTypeRouter, URLRouter

websocket_urlpatterns = [
    re_path(r'ws/stats/$', StatsConsumer.as_asgi()),
]

application = ProtocolTypeRouter({
    'websocket': URLRouter(websocket_urlpatterns),
})