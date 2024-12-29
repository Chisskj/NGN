import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import { FaSave, FaCog } from 'react-icons/fa';
import Switch from 'react-switch'; // Sử dụng Switch từ react-switch

function SystemSettings() {
  const [settings, setSettings] = useState({
    enableNotifications: true,
    systemStatus: 'Active',
    allowGuestAccess: false,
  });

  const handleSwitchChange = (setting) => {
    setSettings((prevSettings) => ({
      ...prevSettings,
      [setting]: !prevSettings[setting],
    }));
  };

  return (
    <Container fluid className="system-settings-container">
      <Row className="my-4">
        <Col md={12}>
          <Card className="shadow-sm">
            <Card.Body>
              <h4 className="mb-3"><FaCog /> System Settings</h4>
              
              {/* Cài đặt trạng thái hệ thống */}
              <Form.Group className="mb-3">
                <Form.Label>System Status</Form.Label>
                <Form.Control as="select" value={settings.systemStatus} onChange={(e) => setSettings({ ...settings, systemStatus: e.target.value })}>
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                  <option value="Maintenance">Maintenance</option>
                </Form.Control>
              </Form.Group>

              {/* Cài đặt thông báo */}
              <Form.Group className="mb-3">
                <Form.Label>Enable Notifications</Form.Label>
                <div className="d-flex justify-content-between align-items-center">
                  <span>{settings.enableNotifications ? 'Enabled' : 'Disabled'}</span>
                  <Switch
                    checked={settings.enableNotifications}
                    onChange={() => handleSwitchChange('enableNotifications')}
                    offHandleColor="#888"
                    onHandleColor="#0d6efd"
                  />
                </div>
              </Form.Group>

              {/* Cài đặt quyền truy cập khách */}
              <Form.Group className="mb-3">
                <Form.Label>Allow Guest Access</Form.Label>
                <div className="d-flex justify-content-between align-items-center">
                  <span>{settings.allowGuestAccess ? 'Enabled' : 'Disabled'}</span>
                  <Switch
                    checked={settings.allowGuestAccess}
                    onChange={() => handleSwitchChange('allowGuestAccess')}
                    offHandleColor="#888"
                    onHandleColor="#0d6efd"
                  />
                </div>
              </Form.Group>

              <Button variant="success" className="mt-3">
                <FaSave /> Save Changes
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default SystemSettings;
