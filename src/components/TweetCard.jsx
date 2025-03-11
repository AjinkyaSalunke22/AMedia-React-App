// components/TweetCard.js
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";

// Function to generate a unique color for each initial
const getColorForInitial = (initial) => {
  const colors = [
    "#e57373", // Red
    "#f06292", // Pink
    "#ba68c8", // Purple
    "#7986cb", // Indigo
    "#64b5f6", // Blue
    "#4dd0e1", // Cyan
    "#4db6ac", // Teal
    "#81c784", // Green
    "#aed581", // Light Green
    "#dce775", // Lime
    "#fff176", // Yellow
    "#ffd54f", // Amber
    "#ffb74d", // Orange
    "#ff8a65", // Deep Orange
  ];

  const index = initial.charCodeAt(0) % colors.length;
  return colors[index];
};

const TweetCard = ({ post, userEmail }) => {
  const firstLetter = userEmail ? userEmail.charAt(0).toUpperCase() : "?"; // Default to '?' if no email
  const avatarColor = getColorForInitial(firstLetter); // Get color for the initial

  return (
    <Card
      sx={{
        mb: 2,
        borderRadius: 2,
        width: { xs: "100%", sm: "90%", md: "100%" }, // Full width on mobile, slightly narrower on tablet, full width in grid on desktop
        maxWidth: { xs: "100%", sm: "500px", md: "none" }, // Limit width on tablet, but not on desktop (handled by Grid)
        mx: "auto", // Center the card horizontally
      }}
    >
      <CardContent
        sx={{
          padding: { xs: 1, sm: 2 }, // Reduce padding on mobile for compactness
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            mb: { xs: 0.5, sm: 1 }, // Reduce margin-bottom on mobile
          }}
        >
          <Avatar
            sx={{
              bgcolor: avatarColor, // Use the generated color
              color: "white",
              marginRight: { xs: 0.5, sm: 1 }, // Reduce margin on mobile
              fontWeight: "bold",
              width: { xs: 24, sm: 30 }, // Smaller avatar on mobile
              height: { xs: 24, sm: 30 }, // Smaller avatar on mobile
              fontSize: { xs: "0.75rem", sm: "0.9rem" }, // Smaller font on mobile
            }}
          >
            {firstLetter}
          </Avatar>
          <Typography
            variant="subtitle2"
            color="textSecondary"
            sx={{
              fontSize: { xs: "0.75rem", sm: "0.875rem" }, // Smaller font on mobile
            }}
          >
            {userEmail || "Unknown User"}
          </Typography>
        </Box>

        <Typography
          variant="h6"
          component="div"
          gutterBottom
          sx={{
            fontSize: { xs: "1rem", sm: "1.25rem" }, // Smaller title on mobile
          }}
        >
          {post.title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            fontSize: { xs: "0.75rem", sm: "0.875rem" }, // Smaller description on mobile
          }}
        >
          {post.description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default TweetCard;