import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from 'react-bootstrap';

function Login({ onLoginSuccess }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const trimmedUsername = username.trim();
    const trimmedPassword = password.trim();

    if (!trimmedUsername || !trimmedPassword) {
      setLoginError('Username and password are required.');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('http://localhost:8888/api/datn/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: trimmedUsername, password: trimmedPassword }),
      });

      const data = await response.json();

      if (response.ok && data.errorCode === 0) {
        const token = data.token; // Assuming the response contains the token
        localStorage.setItem('authToken', token); // Store token in localStorage
        localStorage.setItem('username', trimmedUsername);
        localStorage.setItem('role', data.user.role);
        localStorage.setItem('fullname', data.user.fullname);
        localStorage.setItem('email', data.user.email);
        localStorage.setItem('status', data.user.status);
        localStorage.setItem('password', data.user.password);
        onLoginSuccess(token); // Pass token to parent component
        navigate('/home'); // Redirect to home page after login
      } else {
        setLoginError('Login failed: ' + (data.message || 'Unexpected error'));
      }
    } catch (error) {
      console.error('Network error:', error);
      setLoginError('Unable to connect to the server. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="shadow-sm">
      <Card.Body>
        <h2 className="mb-4">Login</h2>
        {loginError && (
          <div className="alert alert-danger text-center" role="alert">
            {loginError}
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input
              type="text"
              className="form-control"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100" disabled={isSubmitting}>
            {isSubmitting ? 'Logging in...' : 'Login'}
          </button>
        </form>
      </Card.Body>
    </Card>
  );
}

export default Login;
