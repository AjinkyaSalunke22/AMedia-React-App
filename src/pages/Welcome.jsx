// pages/Welcome.js
import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import SearchBarAndPost from "../components/SearchBarAndPost";
import TweetCard from "../components/TweetCard";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Footer from "../components/Footer";

const Welcome = () => {
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); // State for search term

  // Load posts from localStorage on component mount
  useEffect(() => {
    const storedPosts = localStorage.getItem("posts");
    if (storedPosts) {
      setPosts(JSON.parse(storedPosts));
    }
  }, []);

  // Callback to handle new post addition
  const handlePostAdded = (newPost) => {
    setPosts((prevPosts) => [...prevPosts, newPost]); // Update state with new post
  };

  // Filter posts based on searchTerm
  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Navbar />
      <Container sx={{ marginTop: 4, marginBottom: "70px" }}>
        <Typography sx={{ marginTop: "80px" }} variant="h4" align="center" gutterBottom>
          Welcome to AMedia!
        </Typography>
        <SearchBarAndPost onSearchChange={setSearchTerm} onPostAdded={handlePostAdded} /> {/* Pass callback */}

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
      </Container>
      <Footer />
    </div>
  );
};

export default Welcome;