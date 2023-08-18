// AdminPanel.js
import React, { useState } from 'react';
import DarkModeToggle from './DarkModeToggle';
import SearchBar from './SearchBar';
import FilterOptions from './FilterOptions';
import ConversationList from './ConversationList';

function AdminPanel() {
    // State for search query
    const [searchQuery, setSearchQuery] = useState('');
    
    // State for filter options
    const [filter, setFilter] = useState('All');

    // Update search query based on user input
    const handleSearchQueryChange = (query) => {
        setSearchQuery(query);
    };

    // Update filter based on user selection
    const handleFilterChange = (selectedFilter) => {
        setFilter(selectedFilter);
    };
    
    const handleTagCreation = (conversationId, tag) => {
      // Here, you'd ideally update your backend data.
      // For the sake of this example, you could update your frontend "database"
      // or simulate the tagging with a local state.
    };
  
    return (
      <div className="bg-gray-200 min-h-screen">
        <h1 className="text-center text-3xl py-4">Administrator Panel</h1>
        <DarkModeToggle/>
        <SearchBar onSearch={setSearchQuery} />
        <FilterOptions onFilter={setFilter} />
        {/* Simple tag creation mockup */}
        <div className="p-4">
          <input type="text" placeholder="Conversation ID" className="border p-2 rounded mr-2" />
          <input type="text" placeholder="New Tag" className="border p-2 rounded mr-2" />
          <button className="bg-green-500 text-white p-2 rounded" onClick={() => handleTagCreation()}>Add Tag</button>
        </div>
        <ConversationList searchQuery={searchQuery} filter={filter} />
      </div>
    );
  }
  
export default AdminPanel;