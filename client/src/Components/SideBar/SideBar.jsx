import React from "react";
import "./SideBar.css";

const SideBar = () => {
  return (
    <nav className="-z-10">
      <div className="logo">
        <span className="logo-name">CodingLab</span>
      </div>
      <div className="sidebar">
        <div className="sidebar-content">
          <ul className="lists">
            <li className="list">
              <a href="#" className="nav-link">
                <i className="bx bx-home-alt icon"></i>
                <span className="link">Dashboard</span>
              </a>
            </li>
            <li className="list">
              <a href="#" className="nav-link">
                <i className="bx bx-bar-chart-alt-2 icon"></i>
                <span className="link">Revenue</span>
              </a>
            </li>
            <li className="list">
              <a href="#" className="nav-link">
                <i className="bx bx-bell icon"></i>
                <span className="link">Notifications</span>
              </a>
            </li>
            <li className="list">
              <a href="#" className="nav-link">
                <i className="bx bx-message-rounded icon"></i>
                <span className="link">Messages</span>
              </a>
            </li>
            <li className="list">
              <a href="#" className="nav-link">
                <i className="bx bx-pie-chart-alt-2 icon"></i>
                <span className="link">Analytics</span>
              </a>
            </li>
            <li className="list">
              <a href="#" className="nav-link">
                <i className="bx bx-heart icon"></i>
                <span className="link">Likes</span>
              </a>
            </li>
            <li className="list">
              <a href="#" className="nav-link">
                <i className="bx bx-folder-open icon"></i>
                <span className="link">Files</span>
              </a>
            </li>
            <div>
              <li className="list">
                <a href="#" className="nav-link">
                  <i className="bx bx-cog icon"></i>
                  <span className="link">Settings</span>
                </a>
              </li>
              <li className="list">
                <a href="#" className="nav-link">
                  <i className="bx bx-log-out icon"></i>
                  <span className="link">Logout</span>
                </a>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default SideBar;
