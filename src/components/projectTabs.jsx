import React from 'react'
import "./projectTabs.css";

// Project navigation tabs 
const projectTabs = () => {
  return (
    <>
      <div className="tabs">
        {/* Tab buttons for each  section */}
        <button className='tabBtn'>Overview</button>
        <button className='tabBtn'>SRS</button>
        <button className='tabBtn'>Activity</button>
        <button className='tabBtn'>Files</button>
      </div>  
    </>
  )
}

export default projectTabs