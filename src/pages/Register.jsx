import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Box, Alert } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      username,
      email,
      password,
    };

    const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];

    registeredUsers.push(formData);

    localStorage.setItem('registeredUsers', JSON.stringify(registeredUsers));

    setUsername('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');

    setShowAlert(true);

    setTimeout(() => {
      setShowAlert(false);
      navigate('/');
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
          Register
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Username"
            variant="outlined"
            fullWidth
            margin="normal"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
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
          <TextField
            label="Confirm Password"
            variant="outlined"
            fullWidth
            margin="normal"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Register
          </Button>
        </form>
        {showAlert && (
          <Alert severity="success" sx={{ mt: 2 }}>
            Registration successful
          </Alert>
        )}
        <Box mt={2} textAlign="center">
          <Typography variant="body1">
            Already have an account?{' '}
            <Link to="/" style={{ textDecoration: 'none' }}>
              Login
            </Link>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Register;