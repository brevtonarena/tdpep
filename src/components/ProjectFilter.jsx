import React from "react";

// Filter tabs S
const ProjectFilter = () => {
  return (
    <>
      <div className="project-filter">
        {/* Active tab  */}
        <button className="filter-btn filter-btn-active">All</button>
        <button className="filter-btn">Ongoing</button>
        <button className="filter-btn">In Review</button>
        <button className="filter-btn">Completed</button>
      </div>
    </>
  );
};

export default ProjectFilter;
