import React from 'react';
import Conversation from './Conversation';

const ConversationList = (props) => {
  // For simplicity, using static data. You'll fetch this from an API in a real scenario.
    let conversations = [
        {
          id: 1, 
          name: "Weather Inquiry", 
          aiMessage: "Hello, how can I help?", 
          humanMessage: "What's the weather today?", 
          date: new Date(),
          tags: ['weather', 'inquiry']
        },
        // ... more conversations
    ];
    
    // Existing search functionality
    if (props.searchQuery) {
        conversations = conversations.filter(convo =>
        convo.aiMessage.includes(props.searchQuery) || 
        convo.humanMessage.includes(props.searchQuery) ||
        convo.name.includes(props.searchQuery) ||
        convo.tags.some(tag => tag.includes(props.searchQuery))
    );
}


  return (
    <div className="p-4 mx-6">
      {conversations.map(convo => (
        <Conversation key={convo.id} data={convo} />
      ))}
    </div>
  );
}

export default ConversationList;

