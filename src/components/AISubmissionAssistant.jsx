import React from "react";
import logo from "../assets/brevton_logo.jpeg";

// AI-powered pre-check assistant for submissions
const AISubmissionAssistant = () => {
  return (
    <>
      <div className="ai-submission">
        <div className="ai-submission-header">
          <img src={logo} alt="AI Logo" className="ai-logo" />
          <h3>AI Submission Assistant</h3>
        </div>
        <p className="ai-desc">
          Hello! I can pre-check your submissions for improvements.
        </p>
        <button className="precheck-btn">Pre-Check with AI</button>
      </div>
    </>
  );
};

export default AISubmissionAssistant;
