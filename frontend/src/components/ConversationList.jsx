import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Conversation from './Conversation';

const ConversationList = (props) => {
    const [conversations, setConversations] = useState([]);
    const [filteredConversations, setFilteredConversations] = useState([]);

    //const [selectedConversationId, setSelectedConversationId] = useState(null);
    //const selectedConversation = conversations.find((convo) => convo.id === selectedConversationId);
  
    // const handleConversationClick = (conversationId) => {
    //     setSelectedConversationId(conversationId);
    // };

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
                <Conversation
                key={convo.id}
                data={convo}
                // onConversationClick={handleConversationClick(convo)} // Pass conversation ID to parent component on click
                />
            ))}

            {/* {selectedConversation && (
                <ExpandedConversation
                data={selectedConversation}
                onClose={() => setSelectedConversationId(null)}  // Reset selectedConversation when closing
                />
            )} */}
        </div>
    );
}


export default ConversationList;


