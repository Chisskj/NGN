import React, { useState, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { CSSTransition } from 'react-transition-group';
import {
  FaBars,
  FaTimes,
  FaHome,
  FaUserFriends,
  FaCog,
  FaFileAlt,
  FaUserShield,
  FaTasks,
  FaCogs, // Thêm các icons cho submenu
  FaGamepad,
  FaWrench,
} from 'react-icons/fa';
import './AdminPage.css';
import Home from '../components/adminCpn/Home';
import Customers from '../components/adminCpn/Customers';
import Policies from '../components/adminCpn/Policies';
import SystemSettings from '../components/adminCpn/SystemSettings';
import AccountManagement from '../components/adminCpn/AccountManagement';
import GamecodeConfig from '../components/adminCpn/GamecodeConfig';
import ServiceConfig from '../components/adminCpn/ServiceConfig';
import GeneralConfig from '../components/adminCpn/GeneralConfig';

function AdminPage() {
  const [selectedOption, setSelectedOption] = useState('');
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  const [isManagerSubmenuVisible, setIsManagerSubmenuVisible] = useState(false);
  const sidebarRef = useRef(null);

  const handleSelectOption = (option) => {
    setSelectedOption(option);
  };

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  const toggleManagerSubmenu = () => {
    setIsManagerSubmenuVisible(!isManagerSubmenuVisible);
    if (!isManagerSubmenuVisible) {
      // Khi mở menu Manager lần đầu, mặc định chọn 'gamecodeConfig'
      handleSelectOption('gamecodeConfig');
    }
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
              {/* Home */}
              <button
                className="list-group-item btn btn-light d-flex align-items-center rounded-pill mb-3"
                onClick={() => handleSelectOption('home')}
                style={{ transition: 'background-color 0.3s' }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#e0f7fa'}
                onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
              >
                <FaHome className="menu-icon-left" style={{ fontSize: '1.2rem' }} />
                <span className="menu-text" style={{ fontSize: '1.1rem', fontWeight: '500' }}>Home</span>
              </button>

              {/* Customers */}
              <button
                className="list-group-item btn btn-light d-flex align-items-center rounded-pill mb-3"
                onClick={() => handleSelectOption('customers')}
                style={{ transition: 'background-color 0.3s' }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#e0f7fa'}
                onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
              >
                <FaUserFriends className="menu-icon-left" style={{ fontSize: '1.2rem' }} />
                <span className="menu-text" style={{ fontSize: '1.1rem', fontWeight: '500' }}>Customers</span>
              </button>

              {/* Manager */}
              <button
                className="list-group-item btn btn-light d-flex align-items-center justify-content-start p-3 mb-2 rounded"
                onClick={toggleManagerSubmenu}
                style={{ transition: 'background-color 0.3s' }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#e0f7fa'}
                onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
              >
                <FaTasks className="menu-icon-left" style={{ fontSize: '1.3rem', marginRight: '12px' }} />
                <span className="menu-text" style={{ fontSize: '1.1rem', fontWeight: '500' }}>Manager</span>
              </button>

              {/* Submenu */}
              {isManagerSubmenuVisible && (
                <div className="submenu" style={{ paddingLeft: '20px', paddingTop: '10px', paddingBottom: '10px' }}>
                  <button
                    className="list-group-item btn btn-light d-flex align-items-center justify-content-start p-2 mb-1 rounded"
                    onClick={() => handleSelectOption('gamecodeConfig')}
                    style={{
                      transition: 'background-color 0.3s',
                      borderLeft: '4px solid transparent',
                      paddingLeft: '20px',
                    }}
                    onMouseEnter={(e) => e.target.style.backgroundColor = '#b2ebf2'}
                    onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                  >
                    <FaGamepad className="menu-icon-left" style={{ fontSize: '1.2rem', marginRight: '10px' }} />
                    <span className="menu-text" style={{ fontSize: '1rem', fontWeight: '400' }}>Gamecode Config</span>
                  </button>
                  <button
                    className="list-group-item btn btn-light d-flex align-items-center justify-content-start p-2 mb-1 rounded"
                    onClick={() => handleSelectOption('serviceConfig')}
                    style={{
                      transition: 'background-color 0.3s',
                      borderLeft: '4px solid transparent',
                      paddingLeft: '20px',
                    }}
                    onMouseEnter={(e) => e.target.style.backgroundColor = '#b2ebf2'}
                    onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                  >
                    <FaWrench className="menu-icon-left" style={{ fontSize: '1.2rem', marginRight: '10px' }} />
                    <span className="menu-text" style={{ fontSize: '1rem', fontWeight: '400' }}>Service Config</span>
                  </button>
                  <button
                    className="list-group-item btn btn-light d-flex align-items-center justify-content-start p-2 mb-1 rounded"
                    onClick={() => handleSelectOption('generalConfig')}
                    style={{
                      transition: 'background-color 0.3s',
                      borderLeft: '4px solid transparent',
                      paddingLeft: '20px',
                    }}
                    onMouseEnter={(e) => e.target.style.backgroundColor = '#b2ebf2'}
                    onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                  >
                    <FaCogs className="menu-icon-left" style={{ fontSize: '1.2rem', marginRight: '10px' }} />
                    <span className="menu-text" style={{ fontSize: '1rem', fontWeight: '400' }}>General Config</span>
                  </button>
                </div>
              )}

              {/* Policies */}
              <button
                className="list-group-item btn btn-light d-flex align-items-center rounded-pill mb-3"
                onClick={() => handleSelectOption('policies')}
                style={{ transition: 'background-color 0.3s' }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#e0f7fa'}
                onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
              >
                <FaFileAlt className="menu-icon-left" style={{ fontSize: '1.2rem' }} />
                <span className="menu-text" style={{ fontSize: '1.1rem', fontWeight: '500' }}>Policies</span>
              </button>

              {/* System Settings */}
              <button
                className="list-group-item btn btn-light d-flex align-items-center rounded-pill mb-3"
                onClick={() => handleSelectOption('systemSettings')}
                style={{ transition: 'background-color 0.3s' }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#e0f7fa'}
                onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
              >
                <FaCog className="menu-icon-left" style={{ fontSize: '1.2rem' }} />
                <span className="menu-text" style={{ fontSize: '1.1rem', fontWeight: '500' }}>System Settings</span>
              </button>

              {/* Account Management */}
              <button
                className="list-group-item btn btn-light d-flex align-items-center rounded-pill mb-3"
                onClick={() => handleSelectOption('accountManagement')}
                style={{ transition: 'background-color 0.3s' }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#e0f7fa'}
                onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
              >
                <FaUserShield className="menu-icon-left" style={{ fontSize: '1.2rem' }} />
                <span className="menu-text" style={{ fontSize: '1.1rem', fontWeight: '500' }}>Account Management</span>
              </button>
            </div>
          </Col>
        </CSSTransition>

        {/* Main Content */}
        <Col md={isSidebarVisible ? 9 : 12} className="main-content">
          <div className="p-4">
            {selectedOption === 'home' && <Home />}
            {selectedOption === 'customers' && <Customers />}
            {selectedOption === 'gamecodeConfig' && <GamecodeConfig />}
            {selectedOption === 'serviceConfig' && <ServiceConfig />}
            {selectedOption === 'generalConfig' && <GeneralConfig />}
            {selectedOption === 'policies' && <Policies />}
            {selectedOption === 'systemSettings' && <SystemSettings />}
            {selectedOption === 'accountManagement' && <AccountManagement />}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default AdminPage;
