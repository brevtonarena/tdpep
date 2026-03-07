import React from "react";
import "./PendingChecklist.css";

//  submission items with pass/fail status
const PendingChecklist = () => {
  return (
    <>
      <div className="pending-checklist">
        <h3 className="h3">Pending Checklist</h3>

        {/* Failed check item */}
        <div className="checklist-item">
          <span className="check-icon check-fail">2</span>
          <div className="check-info">
            <p className="check-title">Verify solid commit mesage</p>
            <span className="check-badge badge-fail">suggessed</span>
          </div>
        </div>

        {/* Passed check item */}
        <div className="checklist-item">
          <span className="check-icon check-pass">
            <i className="fa-solid fa-check"></i>
          </span>
          <div className="check-info">
            <p className="check-title">Providing evaluation results</p>
            <span className="check-badge badge-pass">passed check</span>
          </div>
        </div>

        {/* Full checklist link */}
        <p className="see-checklist">
          See full checklist <i className="fa-solid fa-greater-than"></i>
        </p>
      </div>
    </>
  );
};

export default PendingChecklist;
