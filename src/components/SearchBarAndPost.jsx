// components/SearchBarAndPost.js
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TweetFormModal from "./TweetFormModal";

const SearchBarAndPost = ({ onSearchChange, onPostAdded }) => {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
    onSearchChange(event.target.value); // Notify parent of search term change
  };

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      mb={2}
      sx={{ gap: 2 }} 
    >
      <TextField
        label="Search Tweets"
        variant="outlined"
        value={search}
        onChange={handleSearchChange}
        sx={{
          flexGrow: 1, // Allow the TextField to grow and take up available space
          maxWidth: "600px", // Optional: Set a max width to prevent it from becoming too wide on large screens
        }}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleOpen}
        sx={{
          height: "56px", // Match the height of the TextField for alignment
          minWidth: "150px", // Set a minimum width for the button to make it more prominent
          fontSize: "1rem", // Optional: Adjust font size for better readability
        }}
      >
        Post a Tweet
      </Button>
      <TweetFormModal open={open} onClose={handleClose} onPostAdded={onPostAdded} />
    </Box>
  );
};

export default SearchBarAndPost;