import React from 'react';
import { FaHome, FaUserFriends, FaCog, FaFileAlt, FaUserShield } from 'react-icons/fa';
import './Sidebar.css';

function Sidebar({ onSelect, toggleSidebar }) {
  return (
    <div className="sidebar">
      <div className="sidebar-header d-flex justify-content-between align-items-center">
        <h4>Menu</h4>
        <button className="btn btn-light" onClick={toggleSidebar}>
          Close
        </button>
      </div>
      <div className="list-group">
        <button className="list-group-item d-flex align-items-center" onClick={() => onSelect('home')}>
          <FaHome className="menu-icon-left" />
          <span>Home</span>
        </button>
        <button className="list-group-item d-flex align-items-center" onClick={() => onSelect('customers')}>
          <FaUserFriends className="menu-icon-left" />
          <span>Customers</span>
        </button>
        <button className="list-group-item d-flex align-items-center" onClick={() => onSelect('policies')}>
          <FaFileAlt className="menu-icon-left" />
          <span>Policies</span>
        </button>
        <button className="list-group-item d-flex align-items-center" onClick={() => onSelect('systemSettings')}>
          <FaCog className="menu-icon-left" />
          <span>System Settings</span>
        </button>
        <button className="list-group-item d-flex align-items-center" onClick={() => onSelect('accountManagement')}>
          <FaUserShield className="menu-icon-left" />
          <span>Account Management</span>
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
