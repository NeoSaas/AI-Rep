import React from 'react'
import PropTypes from 'prop-types'

const TopBar = () => {
  return(
    <div className='inline-flex w-full dark:bg-gradient-to-r dark:from-[#235f80] dark:to-[#273d4f] bg-gradient-to-r from-[#27b9d6] to-[#235f80] h-16 absolute'>
        <img src={require("./images/logo3.png")} className=' m-2 w-12 rounded-lg'/>
        <h2 className='my-auto mx-6 font-semibold text-lg'> CS Bot </h2>
    </div>
  );
}

export default TopBar;


