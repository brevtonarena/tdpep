import React from "react";

// Notes summarizing 
const SubmissionNotes = () => {
  return (
    <>
      <div className="submission-notes">
        <h3 className="h3">Submission Notes</h3>

        <div className="note-item">
          <i className="fa-regular fa-file-lines"></i>
          <p>Code includes data preprocessing pipeline</p>
        </div>

        <div className="note-item">
          <i className="fa-regular fa-file-lines"></i>
          <p>Trained model at 92% accuracy</p>
        </div>

        <div className="note-item">
          <i className="fa-regular fa-file-lines"></i>
          <p>Attached evaluation results</p>
        </div>
      </div>
    </>
  );
};

export default SubmissionNotes;
