import React, { useState } from 'react';
import { Container, Row, Col, Card, Table, Button, InputGroup, FormControl, Modal, Form } from 'react-bootstrap';
import { FaSearch, FaEdit, FaTrashAlt, FaPlus } from 'react-icons/fa';
import './GamecodeConfig.css';  // Thêm CSS cho hiệu ứng và giao diện đẹp

const gamecodeConfigs = [
  {
    id: 1,
    package_code: 'VIP_B',
    package_name: 'Nap VIP B',
    description: '50K/500 kim cương game B',
    add_value: '500',
    ws_id: '1',
    valid_time: '100',
    price: '50000',
    status: '1'
  },
  {
    id: 2,
    package_code: 'VIP_C',
    package_name: 'Nap VIP C',
    description: '100K/1000 kim cương game C',
    add_value: '1000',
    ws_id: '2',
    valid_time: '200',
    price: '100000',
    status: '1'
  },
  {
    id: 3,
    package_code: 'VIP_D',
    package_name: 'Nap VIP D',
    description: '150K/1500 kim cương game D',
    add_value: '1500',
    ws_id: '3',
    valid_time: '300',
    price: '150000',
    status: '0'
  },
  {
    id: 4,
    package_code: 'VIP_E',
    package_name: 'Nap VIP E',
    description: '200K/2000 kim cương game E',
    add_value: '2000',
    ws_id: '4',
    valid_time: '400',
    price: '200000',
    status: '1'
  },
  {
    id: 5,
    package_code: 'VIP_F',
    package_name: 'Nap VIP F',
    description: '250K/2500 kim cương game F',
    add_value: '2500',
    ws_id: '5',
    valid_time: '500',
    price: '250000',
    status: '0'
  }
];

function GamecodeConfig() {
  const [searchTerm, setSearchTerm] = useState('');
  const [showEditModal, setShowEditModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [currentGamecode, setCurrentGamecode] = useState(null);

  const filteredGamecodes = gamecodeConfigs.filter((config) =>
    config.package_code.toLowerCase().includes(searchTerm.toLowerCase()) ||
    config.package_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    config.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    config.add_value.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Mở modal chỉnh sửa
  const handleEditClick = (config) => {
    setCurrentGamecode(config);
    setShowEditModal(true);
  };

  // Mở modal thêm mới gamecode
  const handleAddClick = () => {
    setCurrentGamecode({
      package_code: '',
      package_name: '',
      description: '',
      add_value: '',
      ws_id: '',
      valid_time: '',
      price: '',
      status: '1'
    });
    setShowAddModal(true);
  };

  // Đóng modal
  const handleCloseModal = () => {
    setShowEditModal(false);
    setShowAddModal(false);
  };

  // Lưu thông tin gamecode
  const handleSaveChanges = () => {
    console.log('Thông tin gamecode đã được cập nhật:', currentGamecode);
    setShowEditModal(false);
  };

  // Lưu thông tin gamecode khi thêm
  const handleSaveAdd = () => {
    console.log('Gamecode đã được thêm:', currentGamecode);
    setShowAddModal(false);
  };

  return (
    <Container fluid className="gamecode-config-container">
      <Row className="my-4">
        <Col md={12}>
          <Card className="shadow-sm">
            <Card.Body>
              <div className="d-flex justify-content-between align-items-center">
                <h4 className="mb-3">Manage Gamecodes</h4>
                <Button variant="success" onClick={handleAddClick}>
                  <FaPlus /> Add New Gamecode
                </Button>
              </div>
              <InputGroup className="mb-3">
                <FormControl
                  placeholder="Search by gamecode or description"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <InputGroup.Text><FaSearch /></InputGroup.Text>
              </InputGroup>
              <Table striped bordered hover responsive className="gamecode-table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Package Code</th>
                    <th>Package Name</th>
                    <th>Description</th>
                    <th>Value</th>
                    <th>Time</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredGamecodes.map((config) => (
                    <tr key={config.id}>
                      <td>{config.id}</td>
                      <td>{config.package_code}</td>
                      <td>{config.package_name}</td>
                      <td>{config.description}</td>
                      <td>{config.add_value}</td>
                      <td>{config.valid_time}</td>
                      <td>{config.status === '1' ? 'Active' : 'Inactive'}</td>
                      <td>
                        <Button variant="info" size="sm" className="mr-2" onClick={() => handleEditClick(config)}>
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

      {/* Modal Edit Gamecode */}
      <Modal show={showEditModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Gamecode</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {currentGamecode && (
            <Form>
              <Form.Group controlId="formPackageCode">
                <Form.Label>Package Code</Form.Label>
                <Form.Control
                  type="text"
                  value={currentGamecode.package_code}
                  onChange={(e) => setCurrentGamecode({ ...currentGamecode, package_code: e.target.value })}
                />
              </Form.Group>

              <Form.Group controlId="formPackageName">
                <Form.Label>Package Name</Form.Label>
                <Form.Control
                  type="text"
                  value={currentGamecode.package_name}
                  onChange={(e) => setCurrentGamecode({ ...currentGamecode, package_name: e.target.value })}
                />
              </Form.Group>

              <Form.Group controlId="formDescription">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  type="text"
                  value={currentGamecode.description}
                  onChange={(e) => setCurrentGamecode({ ...currentGamecode, description: e.target.value })}
                />
              </Form.Group>

              <Form.Group controlId="formAddValue">
                <Form.Label>Add Value</Form.Label>
                <Form.Control
                  type="number"
                  value={currentGamecode.add_value}
                  onChange={(e) => setCurrentGamecode({ ...currentGamecode, add_value: e.target.value })}
                />
              </Form.Group>

              <Form.Group controlId="formWsId">
                <Form.Label>WS ID</Form.Label>
                <Form.Control
                  type="number"
                  value={currentGamecode.ws_id}
                  onChange={(e) => setCurrentGamecode({ ...currentGamecode, ws_id: e.target.value })}
                />
              </Form.Group>

              <Form.Group controlId="formValidTime">
                <Form.Label>Valid Time</Form.Label>
                <Form.Control
                  type="number"
                  value={currentGamecode.valid_time}
                  onChange={(e) => setCurrentGamecode({ ...currentGamecode, valid_time: e.target.value })}
                />
              </Form.Group>

              <Form.Group controlId="formPrice">
                <Form.Label>Price</Form.Label>
                <Form.Control
                  type="number"
                  value={currentGamecode.price}
                  onChange={(e) => setCurrentGamecode({ ...currentGamecode, price: e.target.value })}
                />
              </Form.Group>

              <Form.Group controlId="formStatus">
                <Form.Label>Status</Form.Label>
                <Form.Control
                  as="select"
                  value={currentGamecode.status}
                  onChange={(e) => setCurrentGamecode({ ...currentGamecode, status: e.target.value })}
                >
                  <option value="1">Active</option>
                  <option value="0">Inactive</option>
                </Form.Control>
              </Form.Group>
            </Form>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>Close</Button>
          <Button variant="primary" onClick={handleSaveChanges}>Save Changes</Button>
        </Modal.Footer>
      </Modal>

      {/* Modal Add Gamecode */}
      <Modal show={showAddModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Gamecode</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {currentGamecode && (
            <Form>
              <Form.Group controlId="formPackageCode">
                <Form.Label>Package Code</Form.Label>
                <Form.Control
                  type="text"
                  value={currentGamecode.package_code}
                  onChange={(e) => setCurrentGamecode({ ...currentGamecode, package_code: e.target.value })}
                />
              </Form.Group>

              <Form.Group controlId="formPackageName">
                <Form.Label>Package Name</Form.Label>
                <Form.Control
                  type="text"
                  value={currentGamecode.package_name}
                  onChange={(e) => setCurrentGamecode({ ...currentGamecode, package_name: e.target.value })}
                />
              </Form.Group>

              <Form.Group controlId="formDescription">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  type="text"
                  value={currentGamecode.description}
                  onChange={(e) => setCurrentGamecode({ ...currentGamecode, description: e.target.value })}
                />
              </Form.Group>

              <Form.Group controlId="formAddValue">
                <Form.Label>Add Value</Form.Label>
                <Form.Control
                  type="number"
                  value={currentGamecode.add_value}
                  onChange={(e) => setCurrentGamecode({ ...currentGamecode, add_value: e.target.value })}
                />
              </Form.Group>

              <Form.Group controlId="formWsId">
                <Form.Label>WS ID</Form.Label>
                <Form.Control
                  type="number"
                  value={currentGamecode.ws_id}
                  onChange={(e) => setCurrentGamecode({ ...currentGamecode, ws_id: e.target.value })}
                />
              </Form.Group>

              <Form.Group controlId="formValidTime">
                <Form.Label>Valid Time</Form.Label>
                <Form.Control
                  type="number"
                  value={currentGamecode.valid_time}
                  onChange={(e) => setCurrentGamecode({ ...currentGamecode, valid_time: e.target.value })}
                />
              </Form.Group>

              <Form.Group controlId="formPrice">
                <Form.Label>Price</Form.Label>
                <Form.Control
                  type="number"
                  value={currentGamecode.price}
                  onChange={(e) => setCurrentGamecode({ ...currentGamecode, price: e.target.value })}
                />
              </Form.Group>

              <Form.Group controlId="formStatus">
                <Form.Label>Status</Form.Label>
                <Form.Control
                  as="select"
                  value={currentGamecode.status}
                  onChange={(e) => setCurrentGamecode({ ...currentGamecode, status: e.target.value })}
                >
                  <option value="1">Active</option>
                  <option value="0">Inactive</option>
                </Form.Control>
              </Form.Group>
            </Form>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>Close</Button>
          <Button variant="primary" onClick={handleSaveAdd}>Add Gamecode</Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default GamecodeConfig;
