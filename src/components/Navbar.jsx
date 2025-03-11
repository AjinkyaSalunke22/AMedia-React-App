import React from "react";
import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import LogoutIcon from "@mui/icons-material/Logout";
import { useTheme } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar'; // Import Avatar
import Box from '@mui/material/Box'; // Import Box for layout

const Navbar = () => {
  const navigate = useNavigate();
  const theme = useTheme();

  const loggedInUserEmail = localStorage.getItem('loggedInUser'); // Get logged in user email
  const firstLetter = loggedInUserEmail ? loggedInUserEmail.charAt(0).toUpperCase() : ''; // Extract first letter

  const handleLogout = () => {
    localStorage.setItem("login", "false");
    localStorage.removeItem('loggedInUser');
    navigate("/");
    window.location.reload();
  };

  return (
    <AppBar position="fixed" sx={{ backgroundColor: theme.palette.primary.main }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: "bold" }}>
          AMedia
        </Typography>

        <Box sx={{ display: 'flex', alignItems: 'center' }}> {/* Box to group Avatar and Logout button */}
          {loggedInUserEmail && ( // Conditionally render Avatar if user is logged in (email exists)
            <Avatar sx={{
              bgcolor: 'white',
              color: theme.palette.primary.main, // Icon color same as primary
              marginRight: 1, // Add some space between Avatar and Logout button
              fontWeight: 'bold' // Make letter bold
            }}>
              {firstLetter}
            </Avatar>
          )}
          <Button color="inherit" onClick={handleLogout} startIcon={<LogoutIcon />}>
  
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;