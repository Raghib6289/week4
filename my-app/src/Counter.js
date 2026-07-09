// // src/components/Counter.js

// import React, { useState } from 'react'; // Import useState

// function Counter() {
//   // Declare a state variable called 'count', initialized to 0
//   const [count, setCount] = useState(0);

//   // Function to handle incrementing the count
//   const incrementCount = () => {
//     setCount(count + 1); // Update the state
//   };

// returning the value
//   return (
//     <div style={{ border: '1px solid #eee', margin: '10px', padding: '15px', borderRadius: '8px', textAlign: 'center' }}>
//       <h3>Simple Counter</h3>
//       <p>Current Count: <strong>{count}</strong></p>
//       <button onClick={incrementCount} style={{ padding: '8px 15px', cursor: 'pointer' }}>
//         Increment
//       </button>
//     </div>
//   );
// }

// export default Counter; // Export the component so it can be used elsewhere


import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  // Step 1: Define the event handler function
  const handleIncrementClick = () => {
    console.log('Increment button clicked!'); // Log to console for demonstration
    setCount(prevCount => prevCount + 1); // Use functional update for safety
  };

  return (
    <div style={{ border: '1px solid #eee', margin: '10px', padding: '15px', borderRadius: '8px', textAlign: 'center' }}>
      <h3>Simple Counter</h3>
      <p>Current Count: <strong>{count}</strong></p>
      
      {/* Step 2: Attach the event handler to the button */}
      <button onClick={handleIncrementClick} style={{ padding: '8px 15px', cursor: 'pointer' }}>
        Increment
      </button>
    </div>
  );
}

export default Counter;
