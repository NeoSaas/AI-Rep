from django.core.management.base import BaseCommand
from django.db.models import Count
from datetime import datetime, timedelta
from api.models import Conversation, ConversationStatistics

class Command(BaseCommand):
    help = 'Update conversation statistics'
    def handle(self, *args, **kwargs):
        today = datetime.now().date()
        start_of_week = today - timedelta(days=today.weekday())
        end_of_week = start_of_week + timedelta(days=6)

        weekly_stats = (
            Conversation.objects
            .filter(date__range=[start_of_week, end_of_week])
            .annotate(conversation_count=Count('id'))
        )
        
        # self.stdout.write(weekly_stats)

        # Update the ConversationStatistics model with the new data
        for stat in weekly_stats:
            tag = stat.tags
            conversation_count = stat.conversation_count

            conversation_stat, created = ConversationStatistics.objects.get_or_create(tag=tag)
            conversation_stat.conversation_count = conversation_count
            conversation_stat.save()

        self.stdout.write(self.style.SUCCESS('Successfully updated conversation statistics'))