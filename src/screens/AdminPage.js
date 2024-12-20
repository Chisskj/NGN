import React, { useState, useRef } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { CSSTransition } from 'react-transition-group';
import './AdminPage.css';  // You will define the CSS animations here

function AdminPage() {
  const [selectedOption, setSelectedOption] = useState('');
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);  // Quản lý trạng thái ẩn/hiện sidebar
  const sidebarRef = useRef(null);

  // Hàm xử lý khi người dùng chọn option
  const handleSelectOption = (option) => {
    setSelectedOption(option);
  };

  // Hàm xử lý ẩn/hiện sidebar
  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <Container fluid>
      <Row>
        {/* Sidebar with transition animation */}
        <CSSTransition
          in={isSidebarVisible}
          timeout={300}
          classNames="sidebar"
          unmountOnExit
          nodeRef={sidebarRef}  // Attach ref to the CSSTransition component
        >
          <Col md={3} className="bg-light p-4 sidebar" ref={sidebarRef}>
            <h4>Admin Dashboard</h4>
            <div className="list-group">
              <Button
                variant="light"
                className="list-group-item"
                onClick={() => handleSelectOption('option1')}
              >
                Option 1
              </Button>
              <Button
                variant="light"
                className="list-group-item"
                onClick={() => handleSelectOption('option2')}
              >
                Option 2
              </Button>
              <Button
                variant="light"
                className="list-group-item"
                onClick={() => handleSelectOption('option3')}
              >
                Option 3
              </Button>
            </div>
          </Col>
        </CSSTransition>

        {/* Nội dung bên phải */}
        <Col md={isSidebarVisible ? 9 : 12}>
          <div className="p-4">
            {/* Nút ẩn/hiện sidebar */}
            <Button variant="secondary" onClick={toggleSidebar} className="mb-3">
              {isSidebarVisible ? 'Hide Sidebar' : 'Show Sidebar'}
            </Button>

            <h2>Selected Option</h2>
            {selectedOption === 'option1' && (
              <div>
                <h3>Option 1 Content</h3>
                <p>This is content for Option 1.</p>
              </div>
            )}
            {selectedOption === 'option2' && (
              <div>
                <h3>Option 2 Content</h3>
                <p>This is content for Option 2.</p>
              </div>
            )}
            {selectedOption === 'option3' && (
              <div>
                <h3>Option 3 Content</h3>
                <p>This is content for Option 3.</p>
              </div>
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default AdminPage;
