import React from "react";
import Sidebar from "../components/Sidebar.jsx";
import "./projectDescription.css";
import Navbar from "../components/Navbar.jsx";
import HeadingCard from "../components/HeadingCard.jsx";
import ProjectTabs from "../components/projectTabs.jsx";
import DescriptionCard from "../components/DescriptionCard.jsx";
import TechnicalReq from "../components/TechnicalReq.jsx";
import FunctionalReq from "../components/FunctionalReq.jsx";
import AIAssistant from "../components/AI-Assistant.jsx";
import Milestones from "../components/Milestones.jsx";

// Project Description page 
const projectDescription = () => {
  return (
    <>
      <div className="project-description">

        {/*sidebar */}
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
              <i className="fa-regular fa-chart-bar"></i> Dashboard{" "}
              <i className="fa-solid fa-greater-than"></i> my-project{" "}
              <i className="fa-solid fa-greater-than"></i> AI Model Training
            </p>
          </div>

          {/* Project title  */}
          <div className="ProjectHeading">
            <HeadingCard />
          </div>

          <div className="columns">

            {/* Left column - project details and requirements */}
            <div className="left-column">
              <div className="tab">
                <ProjectTabs />
              </div>
              <div className="description">
                <DescriptionCard />
              </div>
              <div className="description">
                <TechnicalReq />
              </div>
              <div className="description">
                <FunctionalReq />
              </div>
            </div>

            {/* Right column - AI assistant and milestones */}
            <div className="right-column">
              <div className="AI-Assistant">
                <AIAssistant />
              </div>
              <div className="milestones">
                <Milestones />
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default projectDescription;