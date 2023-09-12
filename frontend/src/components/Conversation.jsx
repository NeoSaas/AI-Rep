import React, { useState } from 'react';

function Conversation({ data }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedMessage, setEditedMessage] = useState(data.aiMessage);

  return (
    <div className="bg-white p-4 rounded-md my-4 dark:bg-slate-600">
      <p className="text-red-500 mb-2 dark:text-blue-200">Human: {data.human_message}</p>

      {isEditing ? (
        <textarea 
          value={editedMessage}
          onChange={e => setEditedMessage(e.target.value)}
          className="w-full p-2 rounded-md"
        />
      ) : (
        <p className="text-black mb-2 dark:text-blue-500">AI: {data.ai_message}</p>
      )}

      <div className="flex justify-end">
        <button className="bg-blue-500 text-white p-2 rounded">Allow</button>
        <button onClick={() => setIsEditing(!isEditing)} className="bg-yellow-500 text-white p-2 rounded ml-4">
          {isEditing ? "Save" : "Edit"}
        </button>
        <button className="bg-red-500 text-white p-2 rounded ml-4">Veto</button>
      </div>
    </div>
  );
}

export default Conversation;
// // ... other code
// return (
//     <div className="bg-white p-4 rounded-md my-4">
//       <h3 className="text-xl mb-2">{data.name}</h3>
//       <div className="mb-4">
//         {data.tags.map(tag => (
//           <span key={tag} className="bg-blue-200 text-blue-700 p-1 rounded mr-2">{tag}</span>
//         ))}
//       </div>
//       {/* ... rest of the component */}
//     </div>
// );
