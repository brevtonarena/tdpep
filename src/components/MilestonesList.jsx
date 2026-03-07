import React from "react";
import "./MilestonesList.css";

// Milestones list 
const MilestonesList = () => {
  return (
    <>
      <div className="milestones-list">

        {/* Milestone 1 - In Progress */}
        <div className="milestone-item">
          <div className="milestone-top">
            <h4><i className="fa-solid fa-list"></i> Milestone 1: Data Preprocessing</h4>
            <div className="milestone-status">
              <span className="dot-yellow"></span>
              <span className="status-text">Dees remining</span>
              <strong>60%</strong>
            </div>
          </div>
          <div className="milestone-bottom">
            <p className="milestone-time"><i className="fa-regular fa-clock"></i> 2 days remaining</p>
            <div className="progress-bar-bg">
              <div className="progress-bar-fill" style={{ width: "60%" }}></div>
            </div>
          </div>
        </div>

        {/* Milestone 2 - Upcoming */}
        <div className="milestone-item">
          <div className="milestone-top">
            <h4><i className="fa-solid fa-list"></i> Milestone 2: Model Development</h4>
          </div>
          <div className="milestone-bottom">
            <p className="milestone-time">
              <i className="fa-regular fa-calendar"></i> Starts in 5 days
            </p>
          </div>
        </div>

        {/* Milestone 3 - Pending */}
        <div className="milestone-item milestone-pending">
          <h4><i className="fa-solid fa-plus"></i> Milestone 3: Final Evaluation</h4>
        </div>

      </div>
    </>
  );
};

export default MilestonesList;
