// pages/Welcome.js
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import SearchBarAndPost from "../components/SearchBarAndPost";
import TweetCard from "../components/TweetCard";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Footer from "../components/Footer";

const Welcome = () => {
  const [searchTerm, setSearchTerm] = useState(""); // State for search term

  // Get posts from localStorage
  const posts1 = localStorage.getItem("posts");
  const posts = posts1 ? JSON.parse(posts1) : null; // Handle null/undefined case

  // Filter posts based on searchTerm (only if posts exist)
  const filteredPosts = posts
    ? posts.filter((post) =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  return (
    <div>
      <Navbar />
      <Container sx={{ marginTop: 4, marginBottom: "70px" }}>
        <Typography sx={{ marginTop: "80px" }} variant="h4" align="center" gutterBottom>
          Welcome to AMedia!
        </Typography>
        <SearchBarAndPost onSearchChange={setSearchTerm} /> {/* Pass setSearchTerm to SearchBarAndPost */}

        {/* Conditionally render Tweets section only if posts exist */}
        {posts ? (
          <Box mt={4}>
            <Typography variant="h5" align="left" gutterBottom>
              Tweets
            </Typography>
            <Grid container spacing={2}>
              {filteredPosts.map((post) => (
                <Grid item xs={12} sm={6} md={4} key={post.id}>
                  <TweetCard post={post} userEmail={post.userEmail} />
                </Grid>
              ))}
              {filteredPosts.length === 0 && posts.length > 0 && (
                <Grid item xs={12}>
                  <Typography variant="body2" align="center" color="textSecondary">
                    No tweets found matching your search.
                  </Typography>
                </Grid>
              )}
              {posts.length === 0 && (
                <Grid item xs={12}>
                  <Typography variant="body2" align="center" color="textSecondary">
                    No tweets yet. Be the first to post!
                  </Typography>
                </Grid>
              )}
            </Grid>
          </Box>
        ) : (
          <Box mt={4}>
            <Typography variant="body2" align="center" color="textSecondary">
              No posts for now. Create one
            </Typography>
          </Box>
        )}
      </Container>
      <Footer />
    </div>
  );
};

export default Welcome;