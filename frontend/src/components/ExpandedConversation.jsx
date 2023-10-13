import React, { useEffect, useState } from 'react';
import axios from 'axios';


const ExpandedConversation = (props) =>  {
  const [conversations, setConversations] = useState([]);

  const fetchData = async () => {
    try {
        const response = await axios.get('http://127.0.0.1:8000/api/conversations/');
        setConversations(response.data);
    } catch (error) {
        console.error(error);
    }
};

  return (
    <div className="h-full w-full bg-white absolute top-16">
      <div className="expanded-conversation">
        <p className="text-red-500 mb-2 dark:text-blue-200">Human: {props.data.human_message}</p>
        <p className="text-black mb-2 dark:text-blue-500">
            AI: {props.data.ai_message} ai
        </p>
        <div className="flex justify-end">
        <button
        className="bg-yellow-500 text-white p-2 rounded ml-4"
        >
        </button>
        <button className="bg-red-500 text-white p-2 rounded ml-4">Veto</button>
        </div>
        <button onClick={props.onClose} className="close-button">
          Close
        </button>
      </div>
    </div>
  );
}

export default ExpandedConversation;
