import React, { useState } from 'react';
import { Container, Row, Col, Card, Table, Button, InputGroup, FormControl, Modal, Form } from 'react-bootstrap';
import { FaSearch, FaUserEdit, FaTrashAlt } from 'react-icons/fa';
import './Customer.css'; // Đảm bảo bạn có file CSS để tạo kiểu đẹp mắt

// Dữ liệu giả lập của khách hàng
const customers = [
  { id: 1, name: 'John Doe', email: 'johndoe@example.com', phone: '123-456-7890', status: 'Active' },
  { id: 2, name: 'Jane Smith', email: 'janesmith@example.com', phone: '234-567-8901', status: 'Inactive' },
  { id: 3, name: 'Alex Johnson', email: 'alexjohnson@example.com', phone: '345-678-9012', status: 'Active' },
  { id: 4, name: 'Emily Davis', email: 'emilydavis@example.com', phone: '456-789-0123', status: 'Active' },
  { id: 5, name: 'Michael Brown', email: 'michaelbrown@example.com', phone: '567-890-1234', status: 'Inactive' },
  { id: 6, name: 'Sarah Wilson', email: 'sarahwilson@example.com', phone: '678-901-2345', status: 'Active' },
  { id: 7, name: 'David Lee', email: 'davidlee@example.com', phone: '789-012-3456', status: 'Inactive' },
  { id: 8, name: 'Linda Miller', email: 'lindamiller@example.com', phone: '890-123-4567', status: 'Active' },
  { id: 9, name: 'James Taylor', email: 'jamestaylor@example.com', phone: '901-234-5678', status: 'Active' },
  { id: 10, name: 'Karen Anderson', email: 'karenanderson@example.com', phone: '012-345-6789', status: 'Inactive' },
];

function Customers() {
  const [searchTerm, setSearchTerm] = useState('');
  const [showEditModal, setShowEditModal] = useState(false);
  const [currentCustomer, setCurrentCustomer] = useState(null);

  // Hàm lọc khách hàng theo tên hoặc email
  const filteredCustomers = customers.filter((customer) =>
    customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Mở modal chỉnh sửa
  const handleEditClick = (customer) => {
    setCurrentCustomer(customer);
    setShowEditModal(true);
  };

  // Đóng modal chỉnh sửa
  const handleCloseModal = () => {
    setShowEditModal(false);
  };

  // Lưu thông tin khách hàng
  const handleSaveChanges = () => {
    // Giả sử lưu thành công
    console.log('Thông tin khách hàng đã được cập nhật:', currentCustomer);
    setShowEditModal(false);
  };

  return (
    <Container fluid className="customers-container">
      <Row className="my-4">
        <Col md={12}>
          <Card className="shadow-sm">
            <Card.Body>
              <h4 className="mb-3">Manage Customers</h4>
              <InputGroup className="mb-3">
                <FormControl
                  placeholder="Search by name or email"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <InputGroup.Text><FaSearch /></InputGroup.Text>
              </InputGroup>
              <Table striped bordered hover responsive>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredCustomers.map((customer) => (
                    <tr key={customer.id}>
                      <td>{customer.id}</td>
                      <td>{customer.name}</td>
                      <td>{customer.email}</td>
                      <td>{customer.phone}</td>
                      <td>{customer.status}</td>
                      <td>
                        <Button variant="info" size="sm" className="mr-2" onClick={() => handleEditClick(customer)}>
                          <FaUserEdit /> Edit
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

      {/* Modal Edit Customer */}
      <Modal show={showEditModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Customer</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {currentCustomer && (
            <Form>
              <Form.Group controlId="formCustomerName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  value={currentCustomer.name}
                  onChange={(e) => setCurrentCustomer({ ...currentCustomer, name: e.target.value })}
                />
              </Form.Group>

              <Form.Group controlId="formCustomerEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  value={currentCustomer.email}
                  onChange={(e) => setCurrentCustomer({ ...currentCustomer, email: e.target.value })}
                />
              </Form.Group>

              <Form.Group controlId="formCustomerPhone">
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  type="text"
                  value={currentCustomer.phone}
                  onChange={(e) => setCurrentCustomer({ ...currentCustomer, phone: e.target.value })}
                />
              </Form.Group>

              <Form.Group controlId="formCustomerStatus">
                <Form.Label>Status</Form.Label>
                <Form.Control
                  as="select"
                  value={currentCustomer.status}
                  onChange={(e) => setCurrentCustomer({ ...currentCustomer, status: e.target.value })}
                >
                  <option>Active</option>
                  <option>Inactive</option>
                </Form.Control>
              </Form.Group>
            </Form>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSaveChanges}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default Customers;
