import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Conversation from './Conversation';

const ConversationList = (props) => {
    const [conversations, setConversations] = useState([]);
    const [filteredConversations, setFilteredConversations] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/conversations/');
                setConversations(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
        const interval = setInterval(fetchData, 100000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    useEffect(() => {
        if (props.searchQuery) {
          const filtered = conversations.filter(convo =>
            convo &&
            convo.reamaze_url &&
            convo.ai_Message &&
            convo.human_message &&
            convo.name &&
            convo.tags &&
            convo.tags.some(tag => tag.includes(props.searchQuery))
          );
            setFilteredConversations(filtered);
        } else {
            setFilteredConversations(conversations);
        }
    }, [props.searchQuery, conversations]);

    return (
        <div className="p-4 mx-6">
            {filteredConversations.map(convo => (
                <Conversation key={convo.id} data={convo} />
            ))}
        </div>
    );
}

export default ConversationList;


