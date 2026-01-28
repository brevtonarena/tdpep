import "./Dashboard.css";
import React, { useState, useEffect, useRef } from "react";

function Dashboard() {
  const [chatInput, setChatInput] = useState(false);
  const [showAddDropdown, setShowAddDropdown] = useState(false);

  const addref = useRef(null);
  const chatRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (chatRef.current && !chatRef.current.contains(event.target)) {
        setChatInput(false);
      }
      if (addref.current && !addref.current.contains(event.target)) {
        setShowAddDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <div className="dashb">
        <div className="sideBar">
          <div className="repo-item">
            <b> Top repositories </b>
            <button className="btn">
              <i className="fa-solid fa-bookmark"></i>
              <b>New</b>
            </button>
          </div>
          <input
            className="search-bar"
            type="text"
            placeholder="Find a repository..."
          />
          <div className="repo-list">
            <div className="repo-items">
              <img
                className="repo-img"
                src="https://img.freepik.com/free-icon/user_318-563642.jpg"
                alt=""
              />
              Repository 1
            </div>
            <div className="repo-items">
              <img
                className="repo-img"
                src="https://img.freepik.com/free-icon/user_318-563642.jpg"
                alt=""
              />
              Repository 2
            </div>
            <div className="repo-items">
              <img
                className="repo-img"
                src="https://img.freepik.com/free-icon/user_318-563642.jpg"
                alt=""
              />
              Repository 3
            </div>
            <div className="repo-items">
              <img
                className="repo-img"
                src="https://img.freepik.com/free-icon/user_318-563642.jpg"
                alt=""
              />
              Repository 4
            </div>
            <div className="repo-items">
              <img
                className="repo-img"
                src="https://img.freepik.com/free-icon/user_318-563642.jpg"
                alt=""
              />
              Repository 5
            </div>
            <div className="repo-items">
              <img
                className="repo-img"
                src="https://img.freepik.com/free-icon/user_318-563642.jpg"
                alt=""
              />
              Repository 6
            </div>
          </div>
          <div style={{ fontSize: "16px", padding: "0 30px", color: "white" }}>
            see more
          </div>
        </div>
        <div className="mainContent">
          <h1 className="heading">Home</h1>

          {/* Ask anything section */}
          <div className="chatBox">
            <input
              className="chat-section"
              type="text"
              placeholder="Ask anything"
            />

            <div className="chat-footer">
              <div className="btns">
                <button
                  className="ask-btn"
                  onClick={() => setChatInput(!chatInput)}
                  ref={chatRef}
                >
                  <p>
                    <i className="fas fa-paper-plane"></i> Ask
                  </p>
                </button>

                <button
                  className="ask-btn"
                  ref={addref}
                  onClick={() => setShowAddDropdown(!showAddDropdown)}
                >
                  <p>
                    <i className="fas fa-plus"></i>
                  </p>
                </button>
              </div>

              {chatInput && (
                <div className="chat-input-popup">
                  <div className="task">
                    <i className="fas fa-paper-plane"></i> Ask
                  </div>
                  <div className="task">
                    <i className="fas fa-tasks"></i> Task
                  </div>
                  <div className="task">
                    <i className="fas fa-arrow-up"></i> Upgrade
                  </div>
                </div>
              )}

              {showAddDropdown && (
                <div className="chat-input-popup">
                  <div className="task">
                    <i className="fas fa-folder"></i> Repositories...
                  </div>
                  <div className="task">
                    <i class="fa-solid fa-file"></i> File and Folder...
                  </div>
                  <div className="task">
                    <i>__</i> Spaces...
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Home content starts here */}
          <div className="home-section">
            {/* Feed */}
            <div className="feed-header">
              <h3>Feed</h3>
              <button className="filter-btn">
                <i className="fa-solid fa-sliders"></i> Filter
              </button>
            </div>

            <div className="feed-card">
              <div className="feed-user">
                <img
                  src="https://avatars.githubusercontent.com/u/1?v=4"
                  className="feed-avatar"
                  alt=""
                />
                <div>
                  <b>abc</b> forked your repository
                  <p className="time">n days ago</p>
                </div>
              </div>

              <div className="repo-preview">
                <img
                  src="https://img.freepik.com/free-icon/user_318-563642.jpg"
                  className="repo-img"
                  alt=""
                />
                abc/xyz
                <button className="star-btn">
                  <i className="fa-regular fa-star"></i> Star
                </button>
              </div>
            </div>

            {/* Trending */}
            <div className="trending-section">
              <h4 className="underline">
                <i className="fa-solid fa-arrow-trend-up"></i> Trending
                repositories <p></p>
                <a href="/">See more</a>
              </h4>

              <div className="repo-card">
                <div>
                  <b>clawdbot/clawdbot</b>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    autem odit provident! Officiis, quibusdam tempore!
                  </p>
                  <span className="meta">
                    TypeScript • <i class="fa-solid fa-star"></i> 56.6k
                  </span>
                </div>
                <button className="star-btn">
                  <i className="fa-regular fa-star"></i> Star
                </button>
              </div>
            </div>

            {/* Recommended */}
            <div className="trending-section">
              <h4>Recommended for you</h4>

              <div className="repo-card">
                <div>
                  <b>efg/abc.NET</b>
                  <p>Lorem, ipsum dolor.</p>
                  <span className="meta">
                    C# c++ • <i class="fa-solid fa-star"></i> 17.6k
                  </span>
                </div>
                <button className="star-btn">
                  <i className="fa-regular fa-star"></i> Star
                </button>
              </div>
            </div>
          </div>
          <div>
            <p className="copyright">@Brevton2026</p>
            <div className="footer">
              <p>Terms</p>
              <p>Privacy</p>
              <p>Security</p>
              <p>Status</p>
            </div>
          </div>
        </div>

        <div className="rightPanel">
          <div className="changelog-card ">
            <h3 className="changelog-title">Latest from our changelog</h3>

            <div className="changelog-item">
              <span className="dot"></span>
              <div>
                <p className="time">n1 days ago</p>
                <p className="text">query1</p>
              </div>
            </div>

            <div className="changelog-item">
              <span className="dot"></span>
              <div>
                <p className="time">n2 days ago</p>
                <p className="text">query2</p>
              </div>
            </div>

            <div className="changelog-item">
              <span className="dot"></span>
              <div>
                <p className="time">Last week</p>
                <p className="text">query3</p>
              </div>
            </div>

            <div className="changelog-item">
              <span className="dot"></span>
              <div>
                <p className="time">Last week</p>
                <p className="text">query4</p>
              </div>
            </div>

            <a href="/" className="view-link">
              View changelog →
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
export default Dashboard;
