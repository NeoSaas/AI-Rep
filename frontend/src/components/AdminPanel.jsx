// AdminPanel.js
import React, { useState } from 'react';
import DarkModeToggle from './DarkModeToggle';
import SearchBar from './SearchBar';
import SideBar from './SideBar';
import FilterOptions from './FilterOptions';
import ConversationList from './ConversationList';
import LogoutButton from './authentication/LogoutButton';
import AnalyticsPage from './AnalyticsPage';
import TopBar from './TopBar';
import {BsFillChatLeftTextFill} from 'react-icons/bs'
import {SiGoogleanalytics} from 'react-icons/si'
import {MdOutlineAutoAwesome} from 'react-icons/md'


function AdminPanel({setIsAuthenticated, isAuthenticated}) {
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

    const [activeTab, setActiveTab] = useState('conversations'); 
  
    return (
      <div className='inline-flex w-screen bg-gradient-to-b from-[#27b9d6] to-[#235f80] dark:bg-gradient-to-b dark:from-[#235f80] dark:to-[#273d4f]'>
        <TopBar/>
        <nav className='inline-block h-full w-max bg-inherit my-16'>
          <ul className="inline-block mx-8 space-x-1 space-y-4 mt-4 w-max">
              {/* Tab for Conversations */}
              <li
                className={`cursor-pointer ${
                  activeTab === 'conversations' ? 'text-[#234b66] my-5 py-6 hover:-translate-y-1 hover:scale-100 ease-in-out duration-300' : 'my-5 py-6 hover:-translate-y-1 hover:scale-100 ease-in-out duration-300'
                }`}
                onClick={() => setActiveTab('conversations')}
              >
                <BsFillChatLeftTextFill size={38} className='inline-flex'/>
              </li>
              {/* Tab for Analytics */}
              <li
                className={`cursor-pointer ${
                  activeTab === 'analytics' ? 'text-[#234b66] my-5 py-6 hover:-translate-y-1 hover:scale-100 ease-in-out duration-300' : 'my-5 py-6 hover:-translate-y-1 hover:scale-100 ease-in-out duration-300'
                }`}
                onClick={() => setActiveTab('analytics')}
              >
                <SiGoogleanalytics size={38}/>
              </li>
              <li className='my-5 py-6 w-max hover:-translate-y-1 hover:scale-100 ease-in-out duration-300'>
                <DarkModeToggle/>
              </li>
              <li className='my-5 py-6'>
                <LogoutButton setIsAuthenticated={setIsAuthenticated}/>
              </li>
            </ul>
        </nav>
        <div className="bg-gray-200 dark:bg-slate-900 dark:text-white min-h-screen dark:transition-colors dark:duration-300 transition-colors duration-300 ease-in-out dark:ease-in-out w-full">
          <h1 className="text-center text-3xl py-4">Administrator Panel</h1>
          {/* <DarkModeToggle/>
          <LogoutButton setIsAuthenticated={setIsAuthenticated}/> */}
          {/* Render the appropriate tab content */}
          {activeTab == 'conversations' ? (
            <>
              <SearchBar onSearch={setSearchQuery} />
              <FilterOptions onFilter={setFilter} />
              {/* Simple tag creation mockup */}
              <div className="p-4 mx-10 inline-flex">
                <input type="text" placeholder="Conversation ID" className="border p-2 rounded mr-2 text-black" />
                <input type="text" placeholder="New Tag" className="border p-2 rounded mr-2 text-black" />
                <button className="bg-green-500 dark:text-white p-2 rounded mr-2" onClick={() => handleTagCreation()}>Add Tag</button>
                <button className='flex items-center p-2 h-auto w-20 mx-4 text-black dark:text-white dark:hover:border-white hover:border hover:rounded-lg hover:border-black transition duration-500 ease-in-out'><MdOutlineAutoAwesome size={20}/> Auto</button> 
              </div>
              <ConversationList searchQuery={searchQuery} filter={filter} />
            </>
          ):(
            <>
              <AnalyticsPage />
            </>
          )}
        </div>
      </div>
    );
  }
  
export default AdminPanel;