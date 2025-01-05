import React, { useState, createContext, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/Login';
import Signup from './components/SignUp';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AdminPage from './screens/AdminPage';
import ProtectedRoute from './components/ProtectedRoute';
import HomePage from './screens/HomePage';
import ProfilePage from './screens/ProfilePage';
import PurchaseScreen from './screens/PurchaseScreen';
import ResultScreen from "./screens/ResultScreen";
import CodePurchaseScreen from "./screens/CodePurchaseScreen";
import './bootstrap.min.css';

// Context to manage global authentication state
export const AuthContext = createContext();

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [selectedGiftCode, setSelectedGiftCode] = useState(null); // State for selected gift code

  // Check authentication status on app load
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    setIsAuthenticated(!!token);
  }, []);

  // Handle login success
  const handleLoginSuccess = (token) => {
    localStorage.setItem('authToken', token); // Store token in localStorage
    setIsAuthenticated(true);
  };

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem('authToken'); // Remove token from localStorage
    setIsAuthenticated(false);
  };

  // Component for the welcome/authentication screen
  const WelcomeScreen = () => (
    <Row>
      <Col md={6} className="bg-dark text-white d-flex align-items-center justify-content-center">
        <div>
          <h1>Welcome to ProShop</h1>
          <p>Explore our products and experience the best shopping platform!</p>
        </div>
      </Col>
      <Col md={6} className="d-flex align-items-center justify-content-center">
        <div style={{ width: '100%', maxWidth: '400px' }}>
          {isLogin ? (
            <Login onLoginSuccess={handleLoginSuccess} />
          ) : (
            <Signup />
          )}
          <div className="text-center mt-4">
            {isLogin ? (
              <p>
                Don't have an account?{' '}
                <button onClick={() => setIsLogin(false)} className="btn btn-link p-0">
                  Sign Up
                </button>
              </p>
            ) : (
              <p>
                Already have an account?{' '}
                <button onClick={() => setIsLogin(true)} className="btn btn-link p-0">
                  Login
                </button>
              </p>
            )}
          </div>
        </div>
      </Col>
    </Row>
  );

  return (
    <AuthContext.Provider value={{ isAuthenticated, handleLoginSuccess, handleLogout }}>
      <Router>
        <Header setSearchTerm={setSearchTerm}/>
        <main className="py-5">
          <Container>
            <Routes>
              <Route
                path="/"
                element={isAuthenticated ? <Navigate to="/home" /> : <WelcomeScreen />}
              />
              <Route
                path="/admin"
                element={
                  <ProtectedRoute isAuthenticated={isAuthenticated}>
                    <AdminPage />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/home"
                element={
                  <ProtectedRoute isAuthenticated={isAuthenticated}>
                    <HomePage setSelectedGiftCode={setSelectedGiftCode} searchTerm={searchTerm} />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/profile"
                element={
                  <ProtectedRoute isAuthenticated={isAuthenticated}>
                    <ProfilePage />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/purchase"
                element={
                  <ProtectedRoute isAuthenticated={isAuthenticated}>
                    <PurchaseScreen
                      selectedGiftCode={selectedGiftCode}
                      onBack={() => setSelectedGiftCode(null)}
                    />
                  </ProtectedRoute>
                }
              />
              <Route path="/result" element={<ResultScreen />} />
              <Route path="/mygamecode" element={<CodePurchaseScreen />} />
              <Route path="*" element={<Navigate to={isAuthenticated ? '/home' : '/'} />} />
            </Routes>
          </Container>
        </main>
        <Footer />
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
