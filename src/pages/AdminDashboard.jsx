import React from "react";
import styles from "../styles/Dashboard.module.css";


const AdminDashboard = () => {
  const recentProjects = [
    {
      id: 1,
      name: "AI Model Training",
      status: "At Track",
      risk: "Medium",
      health: "Good",
    },
    {
      id: 2,
      name: "Data Processing",
      status: "At Track",
      risk: "Low",
      health: "Excellent",
    },
  ];

  return (
    <div className={styles.dashboardContainer}>
      <div className={styles.contentArea}>
        <main className={styles.mainContent}>
          <header className={styles.contentHeader}>
            <div className={styles.headerLeft}>
              <h1>Admin Dashboard</h1>
            </div>

            <div className={styles.headerRight}>
              {/* This is the new Settings button matching the design */}
              <button className={styles.settingsBtn}>
                <span className={styles.settingsIcon}>⚙️</span>
                Settings
                <span className={styles.chevronIcon}>⌵</span>
              </button>
            </div>
          </header>

          <section className={styles.dashboardGrid}>
            {/* Left Column: User Profile */}
            <div className={styles.profileCard}>
              <div className={styles.avatarCircle}>ZH</div>
              <div className={styles.profileInfo}>
                <h3>Zobiya Hussain</h3>
                <p className={styles.subtitle}>admin@brevtron.com</p>
              </div>
              <div className={styles.profileActions}>
                <button className={styles.btnPrimary}>
                  + Create New Project
                </button>
                <button className={styles.btnOutline}>View Reviews</button>
              </div>
            </div>

            {/* Right Column: Stats Row + Table Stack */}
            <div className={styles.mainDataArea}>
              <div className={styles.topStatsRow}>
                {/* Combined Stats Block */}
                <div className={styles.combinedStatCard}>
                  <div className={styles.statInfo}>
                    <span className={styles.statValue}>12</span>
                    <span className={styles.statLabel}>Total Projects</span>
                    <div>
                      <button className={styles.smallObjectBtn}>Objects</button>
                    </div>
                  </div>

                  <div className={styles.verticalDivider}></div>

                  <div className={styles.statInfo}>
                    <span className={styles.statValue}>6</span>
                    <span className={styles.statLabel}>Active Projects</span>
                    <div>
                      <button className={styles.smallObjectBtn}>Pending</button>
                    </div>
                  </div>
                </div>

                {/* System Health Block */}
                <div className={styles.riskIndicator}>
                  <p className={styles.healthTitle}>System Health</p>
                  <div className={styles.progressBar}>
                    <div
                      className={styles.progressFill}
                      style={{ width: "85%" }}
                    ></div>
                  </div>
                  <span className={styles.performanceText}>
                    High Performance
                  </span>
                </div>
              </div>

              {/* Table Section: Now correctly stacks below Stats */}
              <div className={styles.tableSection}>
                <div className={styles.sectionHeader}>
                  <h2>Projects</h2>
                </div>
                <table className={styles.projectTable}>
                  <thead>
                    <tr>
                      <th>Project Name</th>
                      <th>Status</th>
                      <th>Risk</th>
                      <th>Health</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentProjects.map((project) => (
                      <tr key={project.id}>
                        <td className={styles.projectName}>{project.name}</td>
                        <td>
                          <span className={styles.tagGreen}>
                            {project.status}
                          </span>
                        </td>
                        <td>{project.risk}</td>
                        <td>{project.health}</td>
                        <td>
                          <button className={styles.btnOutline}>View</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className={styles.middleDashboardRow}>
                {/* Recent Activity Section */}
                <div className={styles.activityCard}>
                  <h3 className={styles.cardTitle}>Recent Activity</h3>
                  <div className={styles.activityItem}>
                    <span>New submissions</span>
                    <button className={styles.textBtn}>Take a look</button>
                  </div>
                  <div className={styles.activityItem}>
                    <span>Project updates</span>
                    <button className={styles.textBtn}>
                      Review requirements &gt;
                    </button>
                  </div>
                </div>

                {/* AI Insights Section */}
                <div className={styles.insightsCard}>
                  <div className={styles.insightsHeader}>
                    <h3 className={styles.insightsTitle}>AI Insights</h3>
                    <button>
                      <div className={styles.threeDots}>
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                    </button>
                  </div>

                  <p className={styles.workloadText}>
                    Overall workload: <strong>Moderate</strong>
                  </p>

                  <ul className={styles.insightsList}>
                    <li className={styles.insightItem}>
                      <span
                        className={`${styles.statusDot} ${styles.dotBlue}`}
                      ></span>
                      <p>3 Delay Risk: Data Processing may be delayed</p>
                    </li>
                    <li className={styles.insightItem}>
                      <span
                        className={`${styles.statusDot} ${styles.dotPurple}`}
                      ></span>
                      <p>
                        4 Quality Risk: Flagged issues in recent submissions
                      </p>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Upcoming Deadlines Section */}
              <section className={styles.deadlinesSection}>
                <div className={styles.sectionHeader}>
                  <h3 className={styles.cardTitle}>Upcoming Deadlines</h3>
                  <div className={styles.deadlineLegend}>
                    <span className={styles.legendItem}>
                      <span className={styles.dotBlue}></span> Milestone 1
                    </span>
                    <span className={styles.legendItem}>
                      <span className={styles.dotOrange}></span> Milestone 2
                    </span>
                  </div>
                </div>

                <div className={styles.deadlineList}>
                  {/* Project 1 */}
                  <div className={styles.deadlineRow}>
                    <div className={styles.projectInfo}>
                      <span className={styles.projectIcon}>📄</span>
                      <span className={styles.projectName}>
                        AI Model Training
                      </span>
                    </div>
                    <div className={styles.timelineContainer}>
                      <div className={styles.timelineBar}>
                        <div
                          className={styles.segment}
                          style={{ width: "30%", background: "#3b82f6" }}
                        ></div>
                        <div
                          className={styles.segment}
                          style={{ width: "20%", background: "#f59e0b" }}
                        ></div>
                        <div
                          className={styles.segment}
                          style={{ width: "40%", background: "#e2e8f0" }}
                        ></div>
                      </div>
                    </div>
                  </div>

                  {/* Project 2 */}
                  <div className={styles.deadlineRow}>
                    <div className={styles.projectInfo}>
                      <span className={styles.projectIcon}>📄</span>
                      <span className={styles.projectName}>LUBRep</span>
                    </div>
                    <div className={styles.timelineContainer}>
                      <div className={styles.timelineBar}>
                        <div
                          className={styles.segment}
                          style={{ width: "45%", background: "#60a5fa" }}
                        ></div>
                        <div
                          className={styles.segment}
                          style={{ width: "15%", background: "#3b82f6" }}
                        ></div>
                        <div
                          className={styles.segment}
                          style={{ width: "30%", background: "#f1f5f9" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
