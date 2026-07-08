// // Hands-On: Setting Up and Cleaning Event Listeners with `useEffect`
// // Event listeners are a fundamental part of web development, allowing your application to respond to user interactions or browser events. In React, when you need to attach event listeners that persist beyond a single render or interact with global objects like window, useEffect is the hook to use. Crucially, you must also remember to clean up these listeners to prevent memory leaks.

// // Objective: Create a React component that tracks the user's scroll position on the page and updates the UI accordingly. This involves adding a scroll event listener and ensuring it's removed when the component unmounts.

// // Tools: React, JavaScript, useState, useEffect, browser DOM APIs (window.addEventListener, window.removeEventListener).

// // Step-by-Step Implementation:

// import React, { useState, useEffect } from 'react';

// function ScrollTracker() {
//   const [scrollPosition, setScrollPosition] = useState(0);

//   // ... useEffect will go here ...
//   function SimpleTimer() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     console.log('Timer effect started.');

//     // Set up the interval
//     const intervalId = setInterval(() => {
//       // Use the functional update form of setCount to ensure we always get the latest state
//       setCount(prevCount => prevCount + 1);
//       console.log('Tick...');
//     }, 1000); // Increment every 1000ms (1 second)

//     // Return the cleanup function
//     return () => {
//       console.log('Timer effect cleaning up.');
//       clearInterval(intervalId); // Clear the interval when the component unmounts or re-renders
//     };

//     // Empty dependency array: runs once on mount, cleans up on unmount.
//   }, []);

//   return (
//     <div>
//       <h3>Simple Timer</h3>
//       <p>Elapsed Time: {count} seconds</p>
//     </div>
//   );
// }

//   return (
//     <div>
//       <h3>Scroll Tracker</h3>
//       <p>Current Scroll Position: {scrollPosition}px</p>
//       <p>Scroll down the page to see the value update.</p>
//     </div>
//   );
// }

// export default ScrollTracker;

import React, { useState, useEffect } from 'react';

function ScrollTracker() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    console.log('Scroll tracker effect mounted.');

    // Define the event handler function
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
      // console.log('Scrolled to:', window.scrollY);
    };

    // Add the event listener to the window object
    window.addEventListener('scroll', handleScroll);

    // Return the cleanup function
    return () => {
      console.log('Scroll tracker effect cleaning up.');
      // Remove the event listener to prevent memory leaks
      window.removeEventListener('scroll', handleScroll);
    };

    // Empty dependency array: runs once on mount, cleans up on unmount.
  }, []);

  // Add some styling to make the page scrollable for testing
  const scrollableStyle = {
    height: '2000px', // Make the page tall enough to scroll
    background: 'linear-gradient(to bottom, #e0f7fa, #b2ebf2)',
    padding: '20px',
    fontFamily: 'Arial, sans-serif'
  };

  return (
    <div style={scrollableStyle}>
      <h3>Scroll Tracker</h3>
      <p>Current Scroll Position: {scrollPosition}px</p>
      <p>Scroll down the page to see the value update.</p>
      <div style={{ marginTop: '1800px' }}>
        <p>Bottom of the scrollable area.</p>
      </div>
    </div>
  );
}

export default ScrollTracker;