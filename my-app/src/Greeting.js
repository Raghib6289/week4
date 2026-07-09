// src/Greeting.js

import React from 'react'; // Import React (necessary for JSX)

function Greeting(props) {
  return (
    <div>
      <h1>Hello, {props.name}!</h1>
      <p>Welcome to our application.</p>
    </div>
  );
}

export default Greeting; // Export the component so it can be used elsewhere

