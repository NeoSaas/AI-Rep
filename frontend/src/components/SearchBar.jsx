import React, { useState } from 'react';

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className="bg-white dark:bg-slate-600 p-4 rounded-md my-4 shadow-md mx-10">
      <input 
        className="border w-full p-2 rounded dark:bg-slate-600" 
        type="text" 
        placeholder="Search conversations..." 
        value={query}
        onChange={handleInputChange}
      />
    </div>
  );
}

export default SearchBar;
