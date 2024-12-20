import React, { useState } from 'react';
import { Form, Button, Card, Alert } from 'react-bootstrap';
import axios from 'axios';

function Signup() {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
  });

  const [statusMessage, setStatusMessage] = useState('');
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if passwords match
    if (formData.password !== formData.confirmPassword) {
      setStatusMessage(null);
      setError('Passwords do not match.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:8888/api/datn/auth/register', {
        username: formData.username,
        password: formData.password,
        email: formData.email,
        fullname: formData.fullname,
        status: '0', // Default status
        role: '1',   // Default role
      });

      if (response.data.errorCode === 0) {
        setStatusMessage('Signup successful!');
        setError(null); // Clear any existing errors
      } else {
        setError('An error occurred: ' + response.data.message);
        setStatusMessage(null); // Clear any existing success messages
      }      
    } catch (err) {
      setError('An error occurred while signing up: ' + err.message);
    }
  };

  return (
    <Card>
      <Card.Body>
        <h3 className="text-center mb-4">Sign Up</h3>

        {statusMessage && <Alert variant="success">{statusMessage}</Alert>}
        {error && <Alert variant="danger">{error}</Alert>}

        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="fullname">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your name"
              value={formData.fullname}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="email" className="mt-3">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="username" className="mt-3">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="password" className="mt-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Create a password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="confirmPassword" className="mt-3">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm your password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Button type="submit" className="mt-4 w-100" variant="success">
            Sign Up
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default Signup;
