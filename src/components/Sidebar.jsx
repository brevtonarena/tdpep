import "./Sidebar.css";

function Sidebar() {
  return (
    <>
      <div className="sidebar">
        <div className="items">
          <p className="btn">
            <i className="fa-regular fa-chart-bar"></i> Dashboard
          </p>
          <p className="btn">
            <i className="fa-solid fa-bars-progress"></i> Project
          </p>
          <p className="btn">
            <i className="fa-solid fa-code-compare"></i> Reviews
          </p>
          <p className="btn">
            <i className="fa-solid fa-people-line"></i> Contributors
          </p>
          <p className="btn">
            <i className="fa-solid fa-file"></i> Reports
          </p>
          <p className="btn">
            <i className="fa-solid fa-gear"></i> Settings
          </p>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
