import React, { useState } from "react";
import "./RepoLinks.css";

// Repository / file link submission section
const RepoLinks = () => {
  const [activeTab, setActiveTab] = useState("git");

  return (
    <>
      <div className="repo-links">
        <h3 className="h3">Links to Repository or Files</h3>

        {/* Tab switcher */}
        <div className="repo-tabs">
          <button
            className={`repo-tab ${activeTab === "git" ? "repo-tab-active" : ""}`}
            onClick={() => setActiveTab("git")}
          >
            <i className="fa-solid fa-circle-check"></i> Git Repository
          </button>
          <button
            className={`repo-tab ${activeTab === "file" ? "repo-tab-active" : ""}`}
            onClick={() => setActiveTab("file")}
          >
            File Upload
          </button>
        </div>

        {/* Link input */}
        <div className="repo-input-row">
          <i className="fa-regular fa-file"></i>
          <input
            type="text"
            className="repo-input"
            defaultValue="https://github.com/username/cifar-10-image-classif"
          />
          <button className="edit-btn"><i className="fa-solid fa-pencil"></i></button>
        </div>

        {/* Add another link */}
        <p className="add-link">
          <i className="fa-solid fa-plus"></i> Add Another Link
        </p>

        {/* Upload progress indicator */}
        <div className="upload-progress-bg">
          <div className="upload-progress-fill"></div>
        </div>
      </div>
    </>
  );
};

export default RepoLinks;
