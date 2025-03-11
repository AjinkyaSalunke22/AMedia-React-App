// components/Footer.js
import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useTheme } from '@mui/material/styles';

const Footer = () => {
  const theme = useTheme();

  return (
    <AppBar
      position="fixed" // Changed to 'fixed' to stick to the bottom
      sx={{
        top: 'auto', // Reset default top positioning
        bottom: 0,   // Stick to the bottom
        left: 0,     // Stick to the left edge of viewport
        right: 0,    // Stick to the right edge of viewport
        backgroundColor: theme.palette.primary.main,
        // marginTop: 'auto', // Not needed with fixed positioning in most cases
      }}
    >
      <Toolbar>
        <Typography
          variant="body2" // Or 'caption' for even smaller text
          align="center"
          sx={{
            flexGrow: 1,
            color: 'white', // Or theme.palette.text.secondary for a softer white
          }}
        >
          &copy; {new Date().getFullYear()} Ajinkya Salunke
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;