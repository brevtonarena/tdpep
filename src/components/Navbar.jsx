import React, { useState, useEffect, useRef } from 'react';
import './Navbar.css';

const BrevtonNavbar = () => {
  const [activeNav, setActiveNav] = useState('explore');
  const [showAddDropdown, setShowAddDropdown] = useState(false);
  const [showUserDropdown, setShowUserDropdown] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [MenuOpen, setMenuOpen] = useState(false);
  const [notifications, setNotifications] = useState(3);

  const addDropdownRef = useRef(null);
  const userDropdownRef = useRef(null);
  const MenuRef = useRef(null);

//   Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (addDropdownRef.current && !addDropdownRef.current.contains(event.target)) {
        setShowAddDropdown(false);
      }
      if (userDropdownRef.current && !userDropdownRef.current.contains(event.target)) {
        setShowUserDropdown(false);
      }
      if (MenuRef.current && !MenuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearch = (e) => {
    if (e.key === 'Enter' && searchQuery.trim()) {
      alert(`Searching for: ${searchQuery}`);
      setSearchQuery('');
    }
  };

  const handleNotificationClick = () => {
    alert(`You have ${notifications} unread notifications`);
    setNotifications(0);
  };

  const navItems = [
    { id: 'pull-requests', label: 'Pull requests', icon: 'far fa-clipboard' },
    { id: 'issues', label: 'Issues', icon: 'fas fa-exclamation-circle' },
    { id: 'marketplace', label: 'Marketplace', icon: 'fas fa-store' },
    { id: 'explore', label: 'Explore', icon: 'fas fa-compass' },
  ];

  const addDropdownItems = [
    { icon: 'fas fa-book', label: 'New repository' },
    { icon: 'fas fa-upload', label: 'Import repository' },
    { icon: 'fas fa-code-branch', label: 'New gist' },
    { icon: 'fas fa-project-diagram', label: 'New project' },
  ];

  const userDropdownItems = [
    { header: true, content: <><b>Signed in as</b><div>Brevton</div></> },
    { icon: 'fas fa-user', label: 'Your profile' },
    { icon: 'fas fa-briefcase', label: 'Your repositories' },
    { icon: 'fas fa-chart-line', label: 'Your contributions' },
    { icon: 'fas fa-cog', label: 'Settings' },
    { divider: true },
    { icon: 'fas fa-question-circle', label: 'Help' },
    { icon: 'fas fa-sign-out-alt', label: 'Sign out' },
  ];

  return (
    <>
      <nav className="navbar">

        {/* Search bar */}
        <div className="navbar-search">
          <div className="search-container">
            <i className="fas fa-search search-icon"></i>
            <input
              type="text"
              className="search-input"
              placeholder="Search or jump to..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={handleSearch}
            />
          </div>
        </div>

        {/* Navigation items */}
        <div className="nav-items" ref={MenuRef}>
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`nav-item ${activeNav === item.id ? 'active' : ''}`}
              onClick={() => setActiveNav(item.id)}
            >
              <i className={item.icon}></i>
              <span className="nav-text">{item.label}</span>
            </button>
          ))}
        </div>

        {/* Notification and user section */}
        <div className="navbar-user">
          <button className="icon-btn notification-btn" onClick={handleNotificationClick}>
            <i className="far fa-bell"></i>
            {notifications > 0 && (
              <span className="notification-badge">{notifications}</span>
            )}
          </button>
          
          {/* Add dropdown */}
          <div className="dropdown" ref={addDropdownRef}>
            <button 
              className="icon-btn "
              onClick={() => setShowAddDropdown(!showAddDropdown)}
            >
              <i className="fas fa-plus"></i>
            </button>
            {showAddDropdown && (
              <div className="dropdown-menu" id="add-dropdown">
                {addDropdownItems.map((item, index) => (
                  <a key={index} href="#" className="dropdown-item">
                    <i className={item.icon}></i> {item.label}
                  </a>
                ))}
                <div className="divider"></div>
                <a href="#" className="dropdown-item">
                  <i className="fas fa-user-plus"></i> Invite friends
                </a>
              </div>
            )}
          </div>
          
          {/* User dropdown */}
          <div className="dropdown" ref={userDropdownRef}>
            <button className="icon-btn user-btn" onClick={() => setShowUserDropdown(!showUserDropdown)}>
              <i className="fa-regular fa-user"></i>
            </button>
            {showUserDropdown && (
              <div className="dropdown-menu" id="user-dropdown">
                {userDropdownItems.map((item, index) => {
                  if (item.header) {
                    return (
                      <div key={index} className="dropdown-item">
                        {item.content}
                      </div>
                    );
                  }
                  if (item.divider) {
                    return <div key={index} className="dropdown-divider"></div>;
                  }
                  return (
                    <a key={index} href="#" className="dropdown-item">
                      <i className={item.icon}></i> {item.label}
                    </a>
                  );
                })}
              </div>
            )}
          </div>
          
          {/* Mobile menu toggle */}
          <button 
            className="mobile-menu-toggle" 
            onClick={() => setMenuOpen(!MenuOpen)}
          >
            <i className="fas fa-bars"></i>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {MenuOpen && (
        <div className="mobile-menu">
          <div className="mobile-menu-content">
            {navItems.map((item) => (
              <button
                key={item.id}
                className={`mobile-nav-item ${activeNav === item.id ? 'active' : ''}`}
                onClick={() => {
                  setActiveNav(item.id);
                  setMenuOpen(false);
                }}
              >
                <i className={item.icon}></i>
                {item.label}
              </button>
            ))}
            <div className="mobile-menu-divider"></div>
            <div className="mobile-user-info">
              <img 
                src="https://avatars.githubusercontent.com/u/250320948?v=4"
                alt="User avatar" 
                className="mobile-user-avatar"
              />
              <div className="mobile-user-details">
                <span>XYZ</span>
                <span>View profile</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BrevtonNavbar;