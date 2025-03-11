// components/TweetCard.js
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';

// Function to generate a unique color for each initial
const getColorForInitial = (initial) => {
  const colors = [
    '#e57373', // Red
    '#f06292', // Pink
    '#ba68c8', // Purple
    '#7986cb', // Indigo
    '#64b5f6', // Blue
    '#4dd0e1', // Cyan
    '#4db6ac', // Teal
    '#81c784', // Green
    '#aed581', // Light Green
    '#dce775', // Lime
    '#fff176', // Yellow
    '#ffd54f', // Amber
    '#ffb74d', // Orange
    '#ff8a65', // Deep Orange
  ];

  const index = initial.charCodeAt(0) % colors.length;
  return colors[index];
};

const TweetCard = ({ post, userEmail }) => {
  const firstLetter = userEmail ? userEmail.charAt(0).toUpperCase() : '?'; // Default to '?' if no email
  const avatarColor = getColorForInitial(firstLetter); // Get color for the initial

  return (
    <Card sx={{ mb: 2, borderRadius: 2 }}>
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
          <Avatar
            sx={{
              bgcolor: avatarColor, // Use the generated color
              color: 'white',
              marginRight: 1,
              fontWeight: 'bold',
              width: 30,
              height: 30,
              fontSize: '0.9rem',
            }}
          >
            {firstLetter}
          </Avatar>
          <Typography variant="subtitle2" color="textSecondary">
            {userEmail || 'Unknown User'}
          </Typography>
        </Box>

        <Typography variant="h6" component="div" gutterBottom>
          {post.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {post.description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default TweetCard;