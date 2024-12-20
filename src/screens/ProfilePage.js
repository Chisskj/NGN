import React, { useState } from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import UpdateProfile from '../components/UpdateProfile';
import ChangePassword from '../components/ChangePassword';

function ProfilePage() {
  const navigate = useNavigate();
  const [profileData, setProfileData] = useState({
    username: localStorage.getItem('username'),
    fullName: localStorage.getItem('fullname'),
    email: localStorage.getItem('email'),
  });
  const [passwordData, setPasswordData] = useState({
    oldPassword: '',
    newPassword: '',
    confirmPassword: '',
  });
  const [message, setMessage] = useState('');
  const [error, setError] = useState(false);
  const [isProfileActive, setIsProfileActive] = useState(true); // Toggle state

  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: value });
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswordData({ ...passwordData, [name]: value });
  };

  const handleProfileSubmit = (e) => {
    e.preventDefault();
    setMessage('Profile updated successfully!');
    setError(false);
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    const { oldPassword, newPassword, confirmPassword } = passwordData;

    if (newPassword !== confirmPassword) {
      setMessage('New password and confirm password do not match!');
      setError(true);
      return;
    }

    setMessage('Password updated successfully!');
    setError(false);
  };

  // Handle "Back" button click
  const handleBack = () => {
    navigate(-1);  // Go back to the previous page
  };

  // Toggle between profile update and password change form
  const toggleForm = () => {
    setIsProfileActive(!isProfileActive);
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <Card>
            <Card.Header className="d-flex justify-content-between align-items-center">
              <h4>Profile Settings</h4>
              <Button variant="secondary" onClick={handleBack}>Back</Button>
            </Card.Header>
            <Card.Body>
              {/* Toggle Button */}
              <div className="mb-3">
                <Button 
                  variant={isProfileActive ? "outline-primary" : "outline-secondary"} 
                  onClick={toggleForm}>
                  Update Profile
                </Button>
                <Button 
                  variant={isProfileActive ? "outline-secondary" : "outline-primary"} 
                  onClick={toggleForm} 
                  className="ms-3">
                  Change Password
                </Button>
              </div>

              {/* Conditional Rendering based on the active form */}
              {isProfileActive ? (
                <UpdateProfile
                  profileData={profileData}
                  handleProfileChange={handleProfileChange}
                  handleProfileSubmit={handleProfileSubmit}
                  message={message}
                  error={error}
                />
              ) : (
                <ChangePassword
                  passwordData={passwordData}
                  handlePasswordChange={handlePasswordChange}
                  handlePasswordSubmit={handlePasswordSubmit}
                  message={message}
                  error={error}
                />
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default ProfilePage;
