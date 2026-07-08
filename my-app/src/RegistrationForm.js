// Hands-On: Building a Multi-Field Form with `useState`
// Now, let's put our knowledge of useState into practice by building a common UI component: a form with multiple input fields. We will use separate useState calls for each input, demonstrating the benefits of granular state management.

// Objective: Create a user registration form with fields for Name, Email, and Password, and a checkbox for subscribing to a newsletter. The form should display the entered values upon submission.

// Step 1: Set up the React Component

// Create a new functional component, for example, RegistrationForm.js.

// src/RegistrationForm.js
import React, { useState } from 'react';

function RegistrationForm() {
  // State variables for each form field
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  // Handler for form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default browser form submission
    console.log('Form Data Submitted:');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password); // In a real app, never log passwords!
    console.log('Subscribed:', isSubscribed);

    // You would typically send this data to an API here
    alert(`Thank you, ${name}! Your registration is complete.`);

    // Optionally reset form fields after submission
    setName('');
    setEmail('');
    setPassword('');
    setIsSubscribed(false);
  };

  return (
    <div class='form-container'>
      <h3>User Registration</h3>
      <form onSubmit={handleSubmit}>
        <div class='form-group'>
          <label htmlFor='name'>Name:</label>
          <input
            type='text'
            id='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div class='form-group'>
          <label htmlFor='email'>Email:</label>
          <input
            type='email'
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div class='form-group'>
          <label htmlFor='password'>Password:</label>
          <input
            type='password'
            id='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div class='form-group checkbox-group'>
          <input
            type='checkbox'
            id='subscribe'
            checked={isSubscribed}
            onChange={(e) => setIsSubscribed(e.target.checked)}
          />
          <label htmlFor='subscribe'> Subscribe to newsletter</label>
        </div>

        <button type='submit' class='submit-button'>Register</button>
      </form>
    </div>
  );
}

export default RegistrationForm;

// Explanation:

// We import useState from 'react'.
// For each input field (name, email, password) and the checkbox (isSubscribed), we declare a separate state variable and its corresponding setter function using useState.
// The initial values are set to empty strings for text inputs and false for the checkbox.
// The value prop of each input is bound to its respective state variable.
// The onChange event handler for each input calls its setter function with the new value from event.target.value (for text inputs) or event.target.checked (for checkboxes). This is how the state is updated as the user types or checks the box.
// The handleSubmit function prevents the default browser form submission, logs the current state values to the console, shows an alert, and then resets the form fields by calling their respective setter functions with their initial values.
// This example clearly demonstrates how multiple useState calls provide a clean and manageable way to handle distinct pieces of state within a component, making it easy to update and track form input values.