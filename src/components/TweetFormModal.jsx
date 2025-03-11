// components/TweetFormModal.js
import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: 8,
};

const TweetFormModal = ({ open, onClose }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const loggedInUserEmail = localStorage.getItem('loggedInUser'); // Get logged-in user email

  const handleSubmit = (event) => {
    event.preventDefault();

    // 1. Retrieve existing posts from localStorage
    const storedPosts = localStorage.getItem('posts');
    const postsArray = storedPosts ? JSON.parse(storedPosts) : [];

    // 2. Create a new post object, including userEmail
    const newPost = {
      id: Date.now(), // Simple unique ID using timestamp
      title: title,
      description: description,
      userEmail: loggedInUserEmail, 
    };

    // 3. Append the new post to the array
    postsArray.push(newPost);

    // 4. Save the updated posts array back to localStorage
    localStorage.setItem('posts', JSON.stringify(postsArray));

    // Reset form and close modal
    setTitle('');
    setDescription('');
    onClose();
    window.location.reload();
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="tweet-form-modal-title"
      aria-describedby="tweet-form-modal-description"
    >
      <Box sx={style}>
        <Typography id="tweet-form-modal-title" variant="h6" component="h2" gutterBottom>
          Create a Tweet
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Title"
            variant="outlined"
            fullWidth
            margin="normal"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <TextField
            label="Description"
            variant="outlined"
            fullWidth
            margin="normal"
            multiline
            rows={4}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
          <Box mt={2} display="flex" justifyContent="flex-end">
            <Button type="submit" variant="contained" color="primary" endIcon={<SendIcon />}>
              Post
            </Button>
          </Box>
        </form>
      </Box>
    </Modal>
  );
};

export default TweetFormModal;