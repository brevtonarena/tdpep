import React from "react";
import Sidebar from "../components/Sidebar.jsx";
import Navbar from "../components/Navbar.jsx";
import "./ContributorDashboard.css";
import ProjectStatsBar from "../components/ProjectStatsBar.jsx";
import ProjectFilter from "../components/ProjectFilter.jsx";
import ProjectCards from "../components/ProjectCards.jsx";
import AIProjectHelper from "../components/AIProjectHelper.jsx";
import UpcomingDeadline from "../components/UpcomingDeadline.jsx";

// My Projects page
const myProjects = () => {
  return (
    <>
      <div className="my-projects">

        {/* sidebar */}
        <div className="sidebar">
          <Sidebar />
        </div>

        <div className="mainContent">

          {/* Top navbar */}
          <div className="nav">
            <Navbar />
          </div>

          {/* Breadcrumb path */}
          <div className="path">
            <p className="path-item">
              <i className="fa-solid fa-house"></i> Dashboard{" "}
              <i className="fa-solid fa-greater-than"></i> My Projects
            </p>
          </div>

          {/* Page title  */}
          <div className="projects-header">
            <h2 className="page-title">My Projects</h2>
            <div className="sort-bar">
              <span>Sort by: <strong>Most Recent</strong></span>
              <i className="fa-solid fa-chevron-down"></i>
            </div>
          </div>

          <div className="columns">

            {/* Left column- Description */}
            <div className="left-column">
              <div className="description">
                <ProjectStatsBar />
              </div>
              <div className="description">
                <ProjectFilter />
              </div>
              <ProjectCards />
            </div>

            {/* Right column - AI helper and upcoming deadline */}
            <div className="right-column">
              <div className="AI-Assistant">
                <AIProjectHelper />
              </div>
              <div className="milestones">
                <UpcomingDeadline />
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default myProjects;
