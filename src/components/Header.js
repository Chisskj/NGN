import React, { useContext, useState } from "react";
import {
  Navbar,
  Container,
  Nav,
  Dropdown,
  Form,
  FormControl,
} from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
import { AuthContext } from "../App";
import { useNavigate, useLocation } from "react-router-dom";

function Header({ onSearch }) {
  const { isAuthenticated, handleLogout } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    if (onSearch) {
      onSearch(value);
    }
  };

  const handleBrandClick = () => {
    if (isAuthenticated) navigate("/home");
    else navigate("/");
    window.location.reload();
  };

  const handleLogoutClick = () => {
    handleLogout();
    navigate("/");
  };

  const isHomePage = location.pathname === "/home"; // Kiểm tra nếu đang ở HomePage

  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand
            onClick={handleBrandClick}
            style={{ cursor: "pointer", marginRight: "1rem" }}
          >
            GiftCode Shop
          </Navbar.Brand>
          {isHomePage && (
            <Form
              className="d-flex flex-grow-1"
              onSubmit={(e) => e.preventDefault()}
            >
              <FormControl
                type="text"
                placeholder="Tìm kiếm gamecode..."
                className="me-2"
                value={searchTerm}
                onChange={handleSearchChange}
                style={{ maxWidth: "400px" }}
              />
            </Form>
          )}
          <Nav>
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
                  <Dropdown.Item onClick={() => navigate("/profile")}>
                    Profile
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => navigate("/mygamecode")}>
                    GameCode
                  </Dropdown.Item>
                  <Dropdown.Item onClick={handleLogoutClick}>
                    Logout
                  </Dropdown.Item>
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
