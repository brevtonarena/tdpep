import "./Sidebar.css";
import React from "react";
import logo from "../assets/brevton_logo.jpeg";

// Sidebar 
function Sidebar() {
  return (
    <>
      <div className="sidebar">

        {/* logo at the top */}
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>

        {/* Navigation links */}
        <div className="items">
          <p className="sidebar-item">
            <i className="fa-regular fa-chart-bar"></i> Dashboard
          </p>
          <p className="sidebar-item">
            <i className="fa-solid fa-bars-progress"></i> Project
          </p>
          <p className="sidebar-item">
            <i className="fa-solid fa-code-compare"></i> Reviews
          </p>
          <p className="sidebar-item">
            <i className="fa-solid fa-people-line"></i> Contributors
          </p>
          <p className="sidebar-item">
            <i className="fa-solid fa-file"></i> Reports
          </p>
          <p className="sidebar-item">
            <i className="fa-solid fa-gear"></i> Settings
          </p>
        </div>

      </div>
    </>
  );
}

export default Sidebar;