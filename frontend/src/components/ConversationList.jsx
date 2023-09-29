import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Conversation from './Conversation';

const ConversationList = (props) => {
    const [conversations, setConversations] = useState([]);

    useEffect(() => {
        const interval = setInterval(() => {
          axios.get('http://127.0.0.1:8000/api/conversations/')
            .then((response) => {
                setConversations(response.data);
            })
            .catch((error) => {
                console.error(error);
            }); 
        },100000);
    }, []);
    
    if (props.searchQuery) {
        conversations = conversations.filter(convo =>
        convo.reamaze_url.includes(props.searchQuery) ||
        convo.ai_Message.includes(props.searchQuery) || 
        convo.human_message.includes(props.searchQuery) ||
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

