// FilterOptions.js

import React, { useState } from 'react';

function FilterOptions({ onFilter }) {
  const [status, setStatus] = useState('All');

  const handleFilterChange = (e) => {
    setStatus(e.target.value);
    onFilter(e.target.value);
  };

  return (
    <div className="bg-white dark:bg-slate-600 p-4 rounded-md my-4 shadow-md mx-10">
      <label htmlFor="statusFilter" className="block text-sm font-normal text-gray-700 dark:text-slate-400 mb-2">Filter by Status</label>
      <select 
        id="statusFilter"
        name="status"
        className="block w-full p-2 border rounded dark:bg-inherit"
        value={status}
        onChange={handleFilterChange}
      >
        <option value="All">All</option>
        <option value="Pending">Pending</option>
        <option value="Allowed">Allowed</option>
        <option value="Vetoed">Vetoed</option>
      </select>
    </div>
  );
}

export default FilterOptions;
