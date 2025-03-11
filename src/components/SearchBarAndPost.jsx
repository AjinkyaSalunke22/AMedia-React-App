// components/SearchBarAndPost.js
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import SendIcon from '@mui/icons-material/Send';
import TweetFormModal from './TweetFormModal'; // Import TweetFormModal

const SearchBarAndPost = ({ onSearchChange }) => { // Receive onSearchChange prop
  const [isTweetModalOpen, setIsTweetModalOpen] = useState(false);
  const [searchInputValue, setSearchInputValue] = useState(''); // State for search input value

  const handleTweetButtonClick = () => {
    setIsTweetModalOpen(true);
  };

  const handleTweetModalClose = () => {
    setIsTweetModalOpen(false);
  };

  const handleSearchInputChange = (event) => {
    const value = event.target.value;
    setSearchInputValue(value); // Update local search input value state
    onSearchChange(value);     // Call the onSearchChange prop to update the search term in Welcome.js
  };

  return (
    <Box mt={3}>
      <Grid container spacing={2} alignItems="center" justifyContent="center">
        <Grid item>
          <TextField
            label="Search"
            variant="outlined"
            size="small"
            value={searchInputValue} // Controlled component - value from state
            onChange={handleSearchInputChange} // Call handleSearchInputChange on change
          />
        </Grid>
        <Grid item>
          <IconButton color="primary" aria-label="search">
            <SearchIcon />
          </IconButton>
        </Grid>
        <Grid item>
          <Button variant="contained" color="primary" startIcon={<SendIcon />} onClick={handleTweetButtonClick}>
            Tweet
          </Button>
        </Grid>
      </Grid>

      <TweetFormModal open={isTweetModalOpen} onClose={handleTweetModalClose} />
    </Box>
  );
};

export default SearchBarAndPost;