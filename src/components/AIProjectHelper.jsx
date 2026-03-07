import React from "react";

// AI Project Helper 
const AIProjectHelper = () => {
  return (
    <>
      <div className="ai-helper">

        {/* Header  */}
        <div className="ai-helper-header">
          <h3>AI Project Helper</h3>
        </div>

        <p className="ai-helper-desc">Ask me anything about your projects!</p>

        <div className="ai-helper-input">
          <p>Get tips, clarifications, and estimates.</p>
        </div>

        {/* AI chat */}
        <button className="ai-chat-btn">Chat with AI</button>
      </div>
    </>
  );
};

export default AIProjectHelper;
