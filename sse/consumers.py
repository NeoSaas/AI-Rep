# sse/consumers.py
import json
import asyncio
from channels.generic.websocket import AsyncWebsocketConsumer
from api.models import ConversationStatistics
from django.utils import timezone
from datetime import timedelta

class StatsConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        await self.accept()

        while True:
            # Fetch and send conversation statistics every second
            statistics = await self.get_statistics()
            await self.send(json.dumps(statistics))
            await asyncio.sleep(1)

    async def disconnect(self, close_code):
        pass

    async def get_statistics(self):
        # Fetch and format statistics data as needed
        # For example, get statistics for the last 10 minutes
        statistics = ConversationStatistics.objects.filter(
            date__gte=timezone.now() - timedelta(minutes=10)
        ).order_by('date')

        formatted_stats = [
            {'date': stat.date.strftime('%Y-%m-%d %H:%M:%S'), 'count': stat.conversation_count}
            for stat in statistics
        ]

        return formatted_stats
