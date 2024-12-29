import React, { useState, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { CSSTransition } from 'react-transition-group';
import { FaBars, FaTimes, FaHome, FaUserFriends, FaCog, FaFileAlt, FaUserShield } from 'react-icons/fa';
import './AdminPage.css';
import Home from '../components/adminCpn/Home';
import Customers from '../components/adminCpn/Customers';
import Policies from '../components/adminCpn/Policies';
import SystemSettings from '../components/adminCpn/SystemSettings';
import AccountManagement from '../components/adminCpn/AccountManagement';

function AdminPage() {
  const [selectedOption, setSelectedOption] = useState('');
  const [isSidebarVisible, setIsSidebarVisible] = useState(true); // Sidebar hidden by default
  const sidebarRef = useRef(null);

  // Handle user selecting an option
  const handleSelectOption = (option) => {
    setSelectedOption(option);
  };

  // Toggle sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <Container fluid className={`admin-page ${isSidebarVisible ? 'sidebar-open' : ''}`}>
      {/* Header */}
      <header className="header bg-dark text-white d-flex align-items-center justify-content-between p-3">
        <div>
          <FaBars size={24} onClick={toggleSidebar} className="menu-icon" />
        </div>
        <h4>Admin Dashboard</h4>
      </header>

      <Row>
        {/* Sidebar with transition animation */}
        <CSSTransition
          in={isSidebarVisible}
          timeout={300}
          classNames="sidebar"
          unmountOnExit
          nodeRef={sidebarRef}
        >
          <Col md={3} className="bg-light p-4 sidebar" ref={sidebarRef}>
            <div className="sidebar-header d-flex justify-content-between align-items-center">
              <h4>Menu</h4>
              <FaTimes size={20} onClick={toggleSidebar} className="close-icon" />
            </div>
            <div className="list-group">
              <button
                className="list-group-item btn btn-light d-flex align-items-center"
                onClick={() => handleSelectOption('home')}
              >
                <FaHome className="menu-icon-left" />
                <span className="menu-text">Home</span>
              </button>
              <button
                className="list-group-item btn btn-light d-flex align-items-center"
                onClick={() => handleSelectOption('customers')}
              >
                <FaUserFriends className="menu-icon-left" />
                <span className="menu-text">Customers</span>
              </button>
              <button
                className="list-group-item btn btn-light d-flex align-items-center"
                onClick={() => handleSelectOption('policies')}
              >
                <FaFileAlt className="menu-icon-left" />
                <span className="menu-text">Policies</span>
              </button>
              <button
                className="list-group-item btn btn-light d-flex align-items-center"
                onClick={() => handleSelectOption('systemSettings')}
              >
                <FaCog className="menu-icon-left" />
                <span className="menu-text">System Settings</span>
              </button>
              <button
                className="list-group-item btn btn-light d-flex align-items-center"
                onClick={() => handleSelectOption('accountManagement')}
              >
                <FaUserShield className="menu-icon-left" />
                <span className="menu-text">Account Management</span>
              </button>
            </div>
          </Col>
        </CSSTransition>

        {/* Main Content */}
        <Col md={isSidebarVisible ? 9 : 12} className="main-content">
          <div className="p-4">
            {selectedOption === 'home' && <Home/>}
            {selectedOption === 'customers' && <Customers/>}
            {selectedOption === 'policies' && <Policies/>}
            {selectedOption === 'systemSettings' && <SystemSettings/>}
            {selectedOption === 'accountManagement' && <AccountManagement/>}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default AdminPage;
