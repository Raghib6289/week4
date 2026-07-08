// src/components/SimpleForm.js

import React, { useState } from 'react';

function SimpleForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    alert(`Submitted: Name - ${name}, Email - ${email}`);
    // In a real app, you'd send this data to your backend (e.g., FastAPI)
  };

  return (
    <div style={{ border: '1px solid #ddd', margin: '10px', padding: '20px', borderRadius: '8px', backgroundColor: '#fafafa' }}>
      <h3>Simple Input Form</h3>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor='nameInput' style={{ display: 'block', marginBottom: '5px' }}>Name:</label>
          <input 
            type='text' 
            id='nameInput' 
            value={name} 
            onChange={handleNameChange} 
            style={{ padding: '8px', width: 'calc(100% - 16px)' }} 
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor='emailInput' style={{ display: 'block', marginBottom: '5px' }}>Email:</label>
          <input 
            type='email' 
            id='emailInput' 
            value={email} 
            onChange={handleEmailChange} 
            style={{ padding: '8px', width: 'calc(100% - 16px)' }} 
          />
        </div>
        <button type='submit' style={{ padding: '10px 20px', cursor: 'pointer', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px' }}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default SimpleForm;