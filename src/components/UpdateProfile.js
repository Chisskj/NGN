import React from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

function UpdateProfile({ profileData, handleProfileChange, handleProfileSubmit, message, error }) {
  return (
    <>
      <h5>Update Profile</h5>
      <Form onSubmit={handleProfileSubmit}>
        {/* Username (non-editable) */}
        <Form.Group controlId="formUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            value={profileData.username}
            readOnly
          />
        </Form.Group>

        <Form.Group controlId="formEmail" className="mt-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            name="email"
            value={profileData.email}
            onChange={handleProfileChange}
          />
        </Form.Group>

        <Form.Group controlId="formFullName" className="mt-3">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your full name"
            name="fullName"
            value={profileData.fullName}
            onChange={handleProfileChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="mt-3">
          Update Profile
        </Button>
      </Form>

      {/* Display messages */}
      {message && (
        <Alert variant={error ? 'danger' : 'success'} className="mt-3">
          {message}
        </Alert>
      )}
    </>
  );
}

export default UpdateProfile;
