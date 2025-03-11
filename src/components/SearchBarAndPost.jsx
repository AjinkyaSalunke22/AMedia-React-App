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
      justifyContent="center" // Center the content horizontally
      alignItems="center"
      mb={2}
      sx={{
        gap: 1, // Smaller gap between elements for a compact look
        width: "100%", // Ensure the Box takes up full width for centering
        maxWidth: "600px", // Limit the width of the entire bar (similar to Google)
        margin: "0 auto", // Center the Box horizontally on the page
      }}
    >
      <TextField
        label="Search Tweets"
        variant="outlined"
        value={search}
        onChange={handleSearchChange}
        size="small" // Use Material-UI's small size for a more compact input
        sx={{
          flexGrow: 1, // Allow the TextField to grow within the maxWidth
          maxWidth: "400px", // Limit the width of the search input (similar to Google)
          "& .MuiOutlinedInput-root": {
            borderRadius: "20px", // Rounded corners like Google's search bar
            height: "40px", // Smaller height for a compact look
          },
          "& .MuiInputLabel-outlined": {
            transform: "translate(14px, 10px) scale(1)", // Adjust label position for smaller size
          },
          "& .MuiInputLabel-outlined.Mui-focused, & .MuiInputLabel-outlined.MuiFormLabel-filled": {
            transform: "translate(14px, -6px) scale(0.75)", // Adjust label when focused or filled
          },
        }}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleOpen}
        size="small" // Use Material-UI's small size for a more compact button
        sx={{
          borderRadius: "20px", // Rounded corners like Google's buttons
          height: "40px", // Match the height of the TextField
          minWidth: "120px", // Slightly smaller width for the button
          fontSize: "0.875rem", // Smaller font size for a compact look
          textTransform: "none", // Remove uppercase text for a cleaner look
        }}
      >
        Tweet
      </Button>
      <TweetFormModal open={open} onClose={handleClose} onPostAdded={onPostAdded} />
    </Box>
  );
};

export default SearchBarAndPost;