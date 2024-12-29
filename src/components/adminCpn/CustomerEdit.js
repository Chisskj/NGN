import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Form, InputGroup, FormControl } from 'react-bootstrap';
import { FaUserEdit, FaSave, FaTimes } from 'react-icons/fa';
import './CustomerEdit.css'; // Đảm bảo bạn có file CSS để tạo kiểu đẹp mắt

function CustomerEdit({ customer, onSave, onCancel }) {
  const [formData, setFormData] = useState({
    name: customer.name,
    email: customer.email,
    phone: customer.phone,
    status: customer.status,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = () => {
    onSave(formData);
  };

  return (
    <Container fluid className="customer-edit-container">
      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="shadow-lg p-4">
            <Card.Body>
              <div className="d-flex justify-content-between align-items-center">
                <h4>Edit Customer</h4>
                <Button variant="secondary" onClick={onCancel}>
                  <FaTimes /> Cancel
                </Button>
              </div>

              <Form className="mt-3">
                <Form.Group controlId="formName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter customer name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group controlId="formEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter customer email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group controlId="formPhone">
                  <Form.Label>Phone</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter customer phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group controlId="formStatus">
                  <Form.Label>Status</Form.Label>
                  <InputGroup>
                    <FormControl
                      as="select"
                      name="status"
                      value={formData.status}
                      onChange={handleChange}
                    >
                      <option>Active</option>
                      <option>Inactive</option>
                    </FormControl>
                  </InputGroup>
                </Form.Group>

                <div className="d-flex justify-content-end mt-4">
                  <Button variant="primary" onClick={handleSave} className="mr-2">
                    <FaSave /> Save
                  </Button>
                  <Button variant="secondary" onClick={onCancel}>
                    <FaTimes /> Cancel
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default CustomerEdit;
