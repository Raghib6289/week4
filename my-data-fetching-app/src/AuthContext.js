// Hands-On: Managing User Authentication Status with Context
// User authentication is a crucial feature for many applications. In a React application, managing authentication state globally (e.g., knowing whether a user is logged in) can be done efficiently using React Context. This tutorial will walk you through setting up a simple authentication system using React Context.

// Objective:
// Create a system where a user can log in and log out. Components will display authentication status and conditionally render UI elements based on that status.

// Step 1: Create the Authentication Context
// First, we’ll set up an AuthContext to store the authentication state (whether the user is logged in, their username, and email). This context will be shared across components.

// Create a new file: src/AuthContext.js and add the following code:

// src/AuthContext.js
import React, { createContext, useState, useContext } from 'react';

// Create the context with a default value
const AuthContext = createContext({
  user: null, // null means no user is logged in
  login: (userData) => {}, // Function to log in
  logout: () => {} // Function to log out
});

// Create a provider component that will wrap our app
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (userData) => {
    // In a real app, you'd likely fetch user data from an API
    // For this example, we'll just set a dummy user object
    setUser({
      id: '123',
      name: userData.username,
      email: `${userData.username}@example.com`
    });
    console.log('User logged in:', userData.username);
  };

  const logout = () => {
    setUser(null);
    console.log('User logged out');
  };

  // The value provided to consumers
  const contextValue = {
    user,
    login,
    logout
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to easily consume the AuthContext
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export default AuthContext;