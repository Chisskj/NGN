import React from 'react';
import { Container, Row, Col, Card, Button, ProgressBar } from 'react-bootstrap';
import { FaGift, FaUsers, FaChartLine, FaCogs } from 'react-icons/fa';
import './Home.css'; // Thêm class CSS cho các kiểu dáng riêng

function Home() {
  return (
    <Container fluid className="home-container">
      <Row className="my-4">
        <Col md={3}>
          <Card className="dashboard-card shadow-sm">
            <Card.Body>
              <div className="icon-container">
                <FaGift size={40} />
              </div>
              <h5 className="card-title">Total Giftcodes</h5>
              <p className="card-text">Manage your gift codes efficiently.</p>
              <Button variant="primary" className="w-100">View Details</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="dashboard-card shadow-sm">
            <Card.Body>
              <div className="icon-container">
                <FaUsers size={40} />
              </div>
              <h5 className="card-title">Users</h5>
              <p className="card-text">View and manage registered users.</p>
              <Button variant="primary" className="w-100">View Users</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="dashboard-card shadow-sm">
            <Card.Body>
              <div className="icon-container">
                <FaChartLine size={40} />
              </div>
              <h5 className="card-title">Sales Statistics</h5>
              <p className="card-text">Monitor your sales performance.</p>
              <Button variant="primary" className="w-100">View Stats</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="dashboard-card shadow-sm">
            <Card.Body>
              <div className="icon-container">
                <FaCogs size={40} />
              </div>
              <h5 className="card-title">System Settings</h5>
              <p className="card-text">Configure system preferences.</p>
              <Button variant="primary" className="w-100">Go to Settings</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Progress Bar */}
      <Row className="my-4">
        <Col md={6}>
          <Card className="shadow-sm">
            <Card.Body>
              <h5>Giftcode Activation Progress</h5>
              <ProgressBar now={65} label="65%" />
              <p className="mt-2">Keep track of your giftcode activation progress.</p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="shadow-sm">
            <Card.Body>
              <h5>User Registration Progress</h5>
              <ProgressBar now={40} label="40%" />
              <p className="mt-2">Monitor the user registration process.</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Recent Activity */}
      <Row className="my-4">
        <Col md={12}>
          <Card className="shadow-sm">
            <Card.Body>
              <h5>Recent Activities</h5>
              <ul>
                <li>User "John Doe" purchased 10 giftcodes.</li>
                <li>Giftcode "ABCD1234" activated successfully.</li>
                <li>System settings updated by Admin.</li>
                <li>New user "Jane Smith" registered.</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
