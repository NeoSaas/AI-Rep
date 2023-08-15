// SearchBar.js

import React, { useState } from 'react';

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className="bg-white p-4 rounded-md my-4 shadow-md">
      <input 
        className="border w-full p-2 rounded" 
        type="text" 
        placeholder="Search conversations..." 
        value={query}
        onChange={handleInputChange}
      />
    </div>
  );
}

export default SearchBar;
