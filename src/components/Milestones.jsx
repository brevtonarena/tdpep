import React from "react";

// Milestones component - tracks project progress 
const Milestones = () => {
  return (
    <>
      <div className="Milestones">
        <h2>Milestones</h2>

        {/* Completed milestones */}
        <p>Milestone 1: Project Planning - Completed</p>
        <p>Milestone 2: Data Collection - Completed</p>

        {/* Currently active milestone */}
        <p>Milestone 3: Model Development - In Progress</p>

        {/* Upcoming milestones */}
        <p>Milestone 4: Testing and Evaluation - Pending</p>
        <p>Milestone 5: Deployment - Pending</p>
      </div>
    </>
  );
};

export default Milestones;