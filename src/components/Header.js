import React, { useContext } from 'react';
import { Navbar, Container, Nav, Dropdown } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';
import { AuthContext } from '../App';
import { useNavigate } from 'react-router-dom';

function Header() {
  const { isAuthenticated, handleLogout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleProfileClick = () => {
    navigate('/profile');
  };
  const handleMyGameCodeClick = () => {
    navigate('/mygamecode');
  };

  const handleLogoutClick = () => {
    handleLogout(); // Remove token from localStorage and update state
    navigate('/');   // Redirect to the home page after logout
  };
  const handleBrandClick = () => {
    if(isAuthenticated)
    navigate('/home');
    else
    navigate('/');

    window.location.reload();
  };
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand onClick={handleBrandClick} style={{ cursor: 'pointer' }}>GiftCode Shop</Navbar.Brand>
          <Nav className="ms-auto">
            {isAuthenticated ? (
              <Dropdown align="end">
                <Dropdown.Toggle
                  variant="link"
                  id="user-dropdown"
                  className="text-white d-flex align-items-center"
                >
                  <FaUserCircle size={24} className="me-2" />
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item onClick={handleProfileClick}>Profile</Dropdown.Item>
                  <Dropdown.Item onClick={handleMyGameCodeClick}>GameCode</Dropdown.Item>
                  <Dropdown.Item onClick={handleLogoutClick}>Logout</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            ) : (
              <Nav.Link href="/about" className="text-white">
                About
              </Nav.Link>
            )}
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
