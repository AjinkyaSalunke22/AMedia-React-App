import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Login from './pages/Login';
import Register from './pages/Register';
import Welcome from './pages/Welcome';

const theme = createTheme();

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('login') === 'true');

  useEffect(() => {
    const handleStorageChange = () => {
      setIsLoggedIn(localStorage.getItem('login') === 'true');
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          {isLoggedIn ? (
            <Route path="*" element={<Welcome />} />
          ) : (
            <>
              <Route exact path="/" element={<Login onLogin={handleLogin} />} />
              <Route path="/register" element={<Register />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </>
          )}
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;