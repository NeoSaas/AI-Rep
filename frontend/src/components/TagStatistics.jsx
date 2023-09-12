import React, { useState } from 'react';

function TagStatistics() {
  // Mock data for tag statistics 
  const tagData = [
    { tag: 'Support', count: 25, conversations: ['Conv1', 'Conv2'] },
    { tag: 'Sales', count: 15, conversations: ['Conv3', 'Conv4'] },
    // Add more tags here
  ];

  const [expandedTag, setExpandedTag] = useState(null);

  const toggleTag = (tag) => {
    if (expandedTag === tag) {
      setExpandedTag(null);
    } else {
      setExpandedTag(tag);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl mb-4">Tag Statistics</h2>
      {tagData.map((tagItem, index) => (
        <div
          key={index}
          className="border p-2 mb-2 cursor-pointer"
          onClick={() => toggleTag(tagItem.tag)}
        >
          <div className="flex justify-between items-center">
            <span>{tagItem.tag}</span>
            <span className="text-sm">{tagItem.count} Conversations </span>
          </div>
          {expandedTag === tagItem.tag && (
            <ul className="pl-4 mt-2">
              {tagItem.conversations.map((conv, convIndex) => (
                <li key={convIndex}>{conv}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}

export default TagStatistics;
