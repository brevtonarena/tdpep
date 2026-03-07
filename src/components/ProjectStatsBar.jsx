import React from "react";

// Bar showing assigned, ongoing, and completed project counts
const ProjectStatsBar = () => {
  return (
    <>
      <div className="stats-bar">

        {/* Assigned projects */}
        <i className="fa-solid fa-table-list stats-icon-green"></i>
        <span className="stats-number">12</span>
        <span className="stats-label">Assigned Projects</span>

        <div className="stats-divider"></div>

        {/* Ongoing projects */}
        <i className="fa-regular fa-file stats-icon-blue"></i>
        <span className="stats-number">4</span>
        <span className="stats-label">Ongoing</span>

        <div className="stats-divider"></div>

        {/* Completed projects */}
        <i className="fa-solid fa-fire stats-icon-orange"></i>
        <span className="stats-number">7</span>
        <span className="stats-label">Completed</span>

        {/* Expand toggle */}
        <i className="fa-solid fa-chevron-down stats-chevron"></i>
      </div>
    </>
  );
};

export default ProjectStatsBar;
