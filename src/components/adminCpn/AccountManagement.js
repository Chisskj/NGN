import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Table } from 'react-bootstrap';
import { FaEdit, FaTrash } from 'react-icons/fa';

function AccountManagement() {
  const [accounts, setAccounts] = useState([
    { id: 1, username: 'john_doe', email: 'john@example.com', role: 'Admin' },
    { id: 2, username: 'jane_smith', email: 'jane@example.com', role: 'User' },
    { id: 3, username: 'mike_jones', email: 'mike@example.com', role: 'User' },
    { id: 4, username: 'alice_wang', email: 'alice@example.com', role: 'Admin' },
  ]);

  const handleEdit = (id) => {
    console.log(`Edit account with ID: ${id}`);
    // Code to edit the account
  };

  const handleDelete = (id) => {
    const newAccounts = accounts.filter(account => account.id !== id);
    setAccounts(newAccounts);
    console.log(`Deleted account with ID: ${id}`);
  };

  return (
    <Container>
      <h2>Account Management</h2>
      <p>Manage user accounts, permissions, and roles here.</p>
      
      <Row className="my-4">
        <Col md={12}>
          <Card className="shadow-sm">
            <Card.Body>
              <h4 className="mb-3">Manage Accounts</h4>
              
              {/* Account List */}
              <Table striped bordered hover responsive>
                <thead>
                  <tr>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {accounts.map((account) => (
                    <tr key={account.id}>
                      <td>{account.username}</td>
                      <td>{account.email}</td>
                      <td>{account.role}</td>
                      <td>
                        <Button variant="warning" onClick={() => handleEdit(account.id)}>
                          <FaEdit /> Edit
                        </Button>{' '}
                        <Button variant="danger" onClick={() => handleDelete(account.id)}>
                          <FaTrash /> Delete
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

export default AccountManagement;
