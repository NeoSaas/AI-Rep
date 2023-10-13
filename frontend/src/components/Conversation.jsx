import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Conversation({ data }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedMessage, setEditedMessage] = useState(data.ai_message);
  const nav = useNavigate();
  // setData(data);
  
  const handleConversationClick = async (values) => {
    nav('/admin/conversation/');
  }

  return (
    <div
      className={`bg-white p-4 rounded-md my-4 dark:bg-slate-600 hover:scale-95 hover:ease-in-out hover:duration-300 scale-100 duration-300 ease-in-out`}
      onClick={handleConversationClick}
    >
      <p className="text-red-500 mb-2 dark:text-blue-200">Human: {data.human_message}</p>

      {isEditing ? (
        <textarea
          value={editedMessage}
          onChange={(e) => setEditedMessage(e.target.value)}
          className="w-full p-2 rounded-md"
        />
      ) : (
        <p className="text-black mb-2 dark:text-blue-500">
          AI: {isEditing ? editedMessage : data.ai_message}
        </p>
      )}

      <div className="flex justify-end">
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="bg-yellow-500 text-white p-2 rounded ml-4"
          >
            {isEditing ? 'Save' : 'Edit'}
          </button>
        <button className="bg-red-500 text-white p-2 rounded ml-4">Veto</button>
          {/* <button onClick={handleExpandToggle} className="ml-4">
            Minimize
          </button> */}
      </div>
    </div>
  );
}
