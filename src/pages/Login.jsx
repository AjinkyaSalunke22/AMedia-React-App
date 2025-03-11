import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Box, Alert } from '@mui/material';
import { isUserLoggedIn } from '../utils/Utils';
import { Link, useNavigate } from 'react-router-dom';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginStatus, setLoginStatus] = useState(null);
  const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const isLoggedIn = isUserLoggedIn(email, password);

    if (isLoggedIn) {
      localStorage.setItem('login', 'true');
      setLoginStatus('success');
      onLogin();
    } else {
      localStorage.setItem('login', 'false');
      setLoginStatus('error');
    }

    setShowAlert(true);

    setEmail('');
    setPassword('');

    setTimeout(() => {
      setShowAlert(false);
      if (isLoggedIn) {
        navigate('/welcome');
      } else {
        navigate('/register');
      }
    }, 1000);
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      <Container maxWidth="xs">
        <Typography variant="h4" align="center" gutterBottom>
          Login
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <TextField
            label="Password"
            variant="outlined"
            fullWidth
            margin="normal"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Login
          </Button>
        </form>
        {showAlert && (
          <Alert
            severity={loginStatus === 'success' ? 'success' : 'error'}
            sx={{ mt: 2 }}
          >
            {loginStatus === 'success' ? 'Logged in successfully' : 'Please register first'}
          </Alert>
        )}
        <Box mt={2} textAlign="center">
          <Typography variant="body1">
            Don't have an account?{' '}
            <Link to="/register" style={{ textDecoration: 'none' }}>
              Register
            </Link>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Login;