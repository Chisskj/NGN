import React from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

function ChangePassword({ passwordData, handlePasswordChange, handlePasswordSubmit, message, error }) {
  return (
    <>
      <h5>Change Password</h5>
      <Form onSubmit={handlePasswordSubmit}>
        <Form.Group controlId="formOldPassword">
          <Form.Label>Old Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter your old password"
            name="oldPassword"
            value={passwordData.oldPassword}
            onChange={handlePasswordChange}
          />
        </Form.Group>

        <Form.Group controlId="formNewPassword" className="mt-3">
          <Form.Label>New Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter a new password"
            name="newPassword"
            value={passwordData.newPassword}
            onChange={handlePasswordChange}
          />
        </Form.Group>

        <Form.Group controlId="formConfirmPassword" className="mt-3">
          <Form.Label>Confirm New Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirm your new password"
            name="confirmPassword"
            value={passwordData.confirmPassword}
            onChange={handlePasswordChange}
          />
        </Form.Group>

        <Button variant="danger" type="submit" className="mt-3">
          Change Password
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

export default ChangePassword;
