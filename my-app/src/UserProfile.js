// import React from 'react';

// function UserProfile(props) {
//   // Destructuring props for easier access
//   const { name, age } = props;

//   return (
//     <div style={{ border: '1px solid #ccc', margin: '10px', padding: '10px', borderRadius: '5px' }}>
//       <h3>User Profile</h3>
//       <p><strong>Name:</strong> {name}</p>
//       <p><strong>Age:</strong> {age}</p>
//     </div>
//   );
// }

// export default UserProfile; // Export the component so it can be used elsewhere

// src/components/UserProfile.js

// import React from 'react';

// function UserProfile(props) {
//   const { name, age } = props;

//   return (
//     <div style={{ border: '1px solid #ccc', margin: '10px', padding: '10px', borderRadius: '5px', backgroundColor: '#f9f9f9' }}>
//       <h3>User Profile</h3>
//       <p><strong>Name:</strong> {name}</p>
//       <p><strong>Age:</strong> {age}</p>
//     </div>
//   );
// }

// export default UserProfile;

// Passing Complex Data
// You can pass any valid JavaScript data type as props:

// Objects: 
// Arrays: 
// Booleans: 
// Functions: (Often used for event handlers, discussed later) 
// Important Note on Prop Types: For larger applications, it's highly recommended to use a library like PropTypes (or TypeScript) to define the expected types for your props. This helps catch errors early during development by ensuring that components receive the correct data.

// Example using PropTypes:

// src/components/UserProfile.js (with PropTypes)

import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes

function UserProfile(props) {
  const { name, age } = props;

  return (
    <div style={{ border: '1px solid #ccc', margin: '10px', padding: '10px', borderRadius: '5px', backgroundColor: '#f9f9f9' }}>
      <h3>User Profile</h3>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Age:</strong> {age}</p>
    </div>
  );
}

// Define prop types
UserProfile.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired
};

export default UserProfile;
