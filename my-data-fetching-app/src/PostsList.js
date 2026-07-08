// Now, let's create a component, say PostsList.js, and implement the data fetching logic.

// src/PostsList.js

import React, { useState, useEffect } from 'react';

function PostsList() {
  // State to store the fetched posts
  const [posts, setPosts] = useState([]);
  // State to manage loading status
  const [loading, setLoading] = useState(true);
  // State to manage potential errors
  const [error, setError] = useState(null);

  useEffect(() => {
    // Define the asynchronous function to fetch data
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setPosts(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    // Call the fetch function
    fetchPosts();

    // The dependency array is empty here, meaning this effect runs only once after the initial render.
  }, []);

  // Render UI based on loading, error, and data states
  if (loading) {
    return <p>Loading posts...</p>;
  }

  if (error) {
    return <p>Error fetching posts: {error.message}</p>;
  }

  return (
    <div>
      <h2>Blog Posts</h2>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostsList;