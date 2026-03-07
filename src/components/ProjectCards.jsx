import React from "react";
import "./ProjectCards.css";

// All project cards(Hardcoded)
const ProjectCards = () => {
  return (
    <>
      <div className="project-cards">

        {/* Card 1 - AI Model Training */}
        <div className="project-card">
          <div className="card-top">
            <div className="card-left">
              <div className="card-icon icon-blue">
                <i className="fa-solid fa-robot"></i>
              </div>
              <div>
                <h3 className="card-title">AI Model Training</h3>
                <p className="card-meta">
                  <i className="fa-regular fa-calendar"></i> Machine Learning · Advanced
                </p>
              </div>
            </div>
            {/* Status badge */}
            <div className="status-badge status-yellow">
              <i className="fa-solid fa-circle-user"></i> In Review
              <span className="progress-pct">82%</span>
            </div>
          </div>
          <div className="card-bottom">
            <div className="card-details">
              <span><i className="fa-regular fa-calendar"></i> 4 weeks</span>
              <span>$ 2,000</span>
            </div>
            <div className="card-progress-bg">
              <div className="card-progress-fill" style={{ width: "82%" }}></div>
            </div>
            <div className="card-actions">
              <button className="view-btn">View Details</button>
              <button className="settings-btn">
                <i className="fa-solid fa-gear"></i> <i className="fa-solid fa-greater-than"></i>
              </button>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="project-card">
          <div className="card-top">
            <div className="card-left">
              <div className="card-icon icon-red">
                <i className="fa-solid fa-table-columns"></i>
              </div>
              <div>
                <h3 className="card-title">Frontend Dashboard Design</h3>
                <p className="card-meta">
                  <i className="fa-regular fa-calendar"></i> UI/UX · Intermediate · $ 1,200
                </p>
              </div>
            </div>
            {/* Status badge */}
            <div className="status-badge status-green">
              <i className="fa-solid fa-circle-check"></i> At Risk
              <span className="progress-pct">78%</span>
            </div>
          </div>
          <div className="card-bottom">
            <div className="card-details">
              <span><i className="fa-regular fa-calendar"></i> 2 weeks</span>
              <span>$ 800</span>
            </div>
            <div className="card-progress-bg">
              <div className="card-progress-fill" style={{ width: "78%" }}></div>
            </div>
            <div className="card-actions">
              <button className="view-btn">View Details</button>
              <button className="settings-btn">
                <i className="fa-solid fa-gear"></i> <i className="fa-solid fa-greater-than"></i>
              </button>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="project-card">
          <div className="card-top">
            <div className="card-left">
              <div className="card-icon icon-purple">
                <i className="fa-solid fa-gift"></i>
              </div>
              <div>
                <h3 className="card-title">REST API Security Audit</h3>
                <p className="card-meta">
                  <i className="fa-regular fa-calendar"></i> Backend ·{" "}
                  <i className="fa-solid fa-equals"></i> 300 · $ 1,300
                </p>
              </div>
            </div>
            {/* Status badge */}
            <div className="status-badge status-teal">
              <i className="fa-solid fa-circle-check"></i> Healthy
              <span className="progress-pct">88%</span>
            </div>
          </div>
          <div className="card-bottom">
            <div className="card-details"></div>
            <div className="card-progress-bg">
              <div className="card-progress-fill progress-green" style={{ width: "88%" }}></div>
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="project-card">
          <div className="card-top">
            <div className="card-left">
              <div className="card-icon icon-green">
                <i className="fa-solid fa-arrows-rotate"></i>
              </div>
              <div>
                <h3 className="card-title">E-commerce Recommendation Engine</h3>
                <p className="card-meta">
                  <i className="fa-regular fa-calendar"></i> Machine Learning · Advanced
                </p>
              </div>
            </div>
            {/* Status badge */}
            <div className="status-badge status-blue">
              <i className="fa-solid fa-circle-plus"></i> Completed
            </div>
          </div>
          <div className="card-bottom">
            <div className="card-details">
              <span><i className="fa-regular fa-calendar"></i> 5 weeks</span>
              <span>$ 2,500</span>
            </div>
            <div className="card-actions">
              <button className="view-btn">View Details</button>
              <button className="view-btn view-btn-outline">View Details</button>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default ProjectCards;
