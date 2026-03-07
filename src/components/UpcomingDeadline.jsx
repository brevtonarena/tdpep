import React from "react";

// Upcoming Deadline
const UpcomingDeadline = () => {
  return (
    <>
      <div className="upcoming-deadline">

        {/* Card header */}
        <div className="deadline-header">
          <h3>Upcoming Deadline</h3>
          <i className="fa-solid fa-ellipsis"></i>
        </div>

        {/* Project name */}
        <p className="deadline-project">Frontend Dashboard Design</p>

        {/* Milestone row */}
        <div className="deadline-milestone">
          <span className="milestone-dot"></span>
          <i className="fa-regular fa-calendar"></i>
          <span>Milestone 1</span>
        </div>

        {/* Days remaining */}
        <p className="deadline-days">
          Due in <strong>4 Days</strong>
        </p>

        {/* Progress bar showing how close the deadline */}
        <div className="deadline-progress-bg">
          <div className="deadline-progress-fill"></div>
        </div>

        {/* Footer */}
        <p className="deadline-footer">
          <i className="fa-regular fa-clock"></i> Due in 3 days ago
        </p>
      </div>
    </>
  );
};

export default UpcomingDeadline;
