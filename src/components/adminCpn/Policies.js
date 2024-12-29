import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Form, InputGroup, FormControl, Table } from 'react-bootstrap';
import { FaSearch, FaEdit, FaPlus, FaTrashAlt } from 'react-icons/fa';
import './Policies.css';

const policies = [
  { id: 1, title: 'Privacy Policy', description: 'We value your privacy and protect your personal data.' },
  { id: 2, title: 'Terms of Service', description: 'By using our services, you agree to our terms and conditions.' },
  { id: 3, title: 'Refund Policy', description: 'Refunds are processed within 30 days of purchase.' },
  { id: 4, title: 'Shipping Policy', description: 'We ship globally, and delivery times vary by location.' },
];

function Policies() {
  const [newPolicy, setNewPolicy] = useState({ title: '', description: '' });
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPolicies = policies.filter((policy) =>
    policy.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddPolicy = () => {
    if (newPolicy.title && newPolicy.description) {
      policies.push({ ...newPolicy, id: policies.length + 1 });
      setNewPolicy({ title: '', description: '' }); // Reset form
    }
  };

  return (
    <Container fluid className="policies-container">
      <Row className="my-4">
        <Col md={12}>
          <Card className="shadow-sm">
            <Card.Body>
              <h4 className="mb-3">Manage Company Policies</h4>

              {/* Tìm kiếm chính sách */}
              <InputGroup className="mb-3">
                <FormControl
                  placeholder="Search policies by title"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <InputGroup.Text><FaSearch /></InputGroup.Text>
              </InputGroup>

              {/* Thêm chính sách mới */}
              <Form className="mb-3">
                <Form.Group controlId="formPolicyTitle">
                  <Form.Label>Title</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter policy title"
                    value={newPolicy.title}
                    onChange={(e) => setNewPolicy({ ...newPolicy, title: e.target.value })}
                  />
                </Form.Group>

                <Form.Group controlId="formPolicyDescription">
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Enter policy description"
                    value={newPolicy.description}
                    onChange={(e) => setNewPolicy({ ...newPolicy, description: e.target.value })}
                  />
                </Form.Group>

                <Button variant="primary" onClick={handleAddPolicy}>
                  <FaPlus /> Add Policy
                </Button>
              </Form>

              {/* Bảng hiển thị chính sách */}
              <Table striped bordered hover responsive>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredPolicies.map((policy) => (
                    <tr key={policy.id}>
                      <td>{policy.id}</td>
                      <td>{policy.title}</td>
                      <td>{policy.description}</td>
                      <td>
                        <Button variant="info" size="sm" className="mr-2">
                          <FaEdit /> Edit
                        </Button>
                        <Button variant="danger" size="sm">
                          <FaTrashAlt /> Delete
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Policies;
