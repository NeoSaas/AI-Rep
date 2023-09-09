import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Conversation from './Conversation';

const ConversationList = (props) => {
    const [conversations, setConversations] = useState([]);

    useEffect(() => {
        // Fetch conversations from your Django API
        axios.get('http://your-django-server/api/conversations/')
            .then((response) => {
                setConversations(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);
    // let conversations = [
    //     {
    //       id: 1, 
    //       name: "Weather Inquiry", 
    //       aiMessage: "Hello, how can I help?", 
    //       humanMessage: "What's the weather today?", 
    //       date: new Date(),
    //       tags: ['weather', 'inquiry']
    //     },
    //     {
    //       id: 2, 
    //       name: "Return Service", 
    //       aiMessage: "Hello, how can I help?", 
    //       humanMessage: "Hey my product return request hasnt been processed yet can you help?", 
    //       date: new Date(),
    //       tags: ['weather', 'inquiry']
    //     },
    //     // ... more conversations
    // ];
    
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

