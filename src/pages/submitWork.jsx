import Navbar from "../components/Navbar.jsx";
import "./submitWork.css";
import SubmitHeadingCard from "../components/SubmitHeadingCard.jsx";
import MilestonesList from "../components/MilestonesList.jsx";
import RepoLinks from "../components/RepoLinks.jsx";
import SubmissionNotes from "../components/SubmissionNotes.jsx";
import AISubmissionAssistant from "../components/AISubmissionAssistant.jsx";
import SmartTips from "../components/SmartTips.jsx";
import PendingChecklist from "../components/PendingChecklist.jsx";

const submitWork = () => {
  return (
    <>
      <div className="submit-work">
        {/* Sidebar */}
        <div className="sidebar">
          <Sidebar />
        </div>

        {/* Main Content */}
        <div className="mainContent">
          <div className="nav">
            <Navbar />
          </div>

          {/* Breadcrumb path */}
          <div className="path">
            <p className="path-item">
              <i className="fa-solid fa-house"></i> Dashboard{" "}
              <i className="fa-solid fa-greater-than"></i> My Projects{" "}
              <i className="fa-solid fa-greater-than"></i> AI Model Training
            </p>
          </div>

          {/* Page Title & Sort */}
          <div className="submit-header">
            <h2 className="page-title">Submit Work</h2>
            <div className="sort-bar">
              <span>Sort by: <strong>Most Recent</strong></span>
              <button className="more-btn"><i className="fa-solid fa-ellipsis"></i></button>
            </div>
          </div>

          {/* Two Column Layout */}
          <div className="columns">

            {/* Left Column */}
            <div className="left-column">

              {/* Project heading card with milestones */}
              <div className="description">
                <SubmitHeadingCard />
                <MilestonesList />
              </div>

              {/* Info note */}
              <div className="info-note">
                <i className="fa-solid fa-circle-info info-icon"></i>
                <div>
                  <p>Make sure all deliverables meet project requirements.</p>
                  <p>Follow the SRS guidelines and add helpful notes referecing your submission.</p>
                </div>
              </div>

              {/* Repository links and submission notes side by side */}
              <div className="submit-bottom">
                <div className="description repo-section">
                  <RepoLinks />
                </div>
                <div className="description notes-section">
                  <SubmissionNotes />
                </div>
              </div>

              {/* Action Buttons */}
              <div className="submit-actions">
                <button className="submit-btn">
                  <i className="fa-solid fa-square-check"></i> Submit Deliverables
                </button>
                <button className="cancel-btn">Cancel</button>
              </div>

            </div>

            {/* Right Column */}
            <div className="right-column">
              <div className="AI-Assistant">
                <AISubmissionAssistant />
              </div>
              <div className="smart-tips-card">
                <SmartTips />
              </div>
              <div className="checklist-card">
                <PendingChecklist />
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default submitWork;
