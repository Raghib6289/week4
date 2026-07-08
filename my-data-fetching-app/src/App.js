// import React from 'react';
// import PostsList from './PostsList';
// import './App.css';

// function App() {
//   return (
//     <div className='App'>
//       <header className='App-header'>
//         <h1>React Data Fetching Example</h1>
//       </header>
//       <main>
//         <PostsList />
//       </main>
//     </div>
//   );
// }

// export default App;

// import React from 'react';
// import SimpleTimer from './SimpleTimer'; // Assuming SimpleTimer.js is in the same directory
// import './App.css';

// function App() {
//   return (
//     <div className='App'>
//       <header className='App-header'>
//         <h1>useEffect Timer Example</h1>
//       </header>
//       <main>
//         <SimpleTimer />
//       </main>
//     </div>
//   );
// }

// export default App;

// import React from 'react';
// import ScrollTracker from './ScrollTracker'; // Assuming ScrollTracker.js is in the same directory
// import './App.css';

// function App() {
//   return (
//     <div className='App'>
//       <header className='App-header'>
//         <p>useEffect Event Listener Example</p>
//       </header>
//       <main>
//         <ScrollTracker />
//       </main>
//     </div>
//   );
// }

// export default App;

// import React, { useState } from 'react';
// import UserDetails from './UserDetails';
// import './App.css';

// function App() {
//   const [currentUserId, setCurrentUserId] = useState(1);

//   const handleNextUser = () => {
//     setCurrentUserId(prevId => prevId + 1);
//   };

//   const handlePreviousUser = () => {
//     setCurrentUserId(prevId => Math.max(1, prevId - 1)); // Ensure ID does not go below 1
//   };

//   return (
//     <div className='App'>
//       <header className='App-header'>
//         <h1>User Details Fetcher</h1>
//       </header>
//       <main>
//         <div style={{ marginBottom: '20px' }}>
//           <button onClick={handlePreviousUser} disabled={currentUserId === 1}>Previous User</button>
//           <span style={{ margin: '0 10px' }}>User ID: {currentUserId}</span>
//           <button onClick={handleNextUser}>Next User</button>
//         </div>
//         <UserDetails userId={currentUserId} />
//       </main>
//     </div>
//   );
// }

// export default App;

// src/App.js
// import React, { useState } from 'react';
// import ThemeContext from './ThemeContext'; // Assuming ThemeContext.js is in src/contexts/
// import MyComponent from './MyComponent'; // A component that will consume the context

// function App() {
//   // We'll use useState to manage the theme value dynamically
//   const [theme, setTheme] = useState('light');

//   // Function to toggle the theme
//   const toggleTheme = () => {
//     setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
//   };

//   // The value we want to provide includes the current theme and a way to change it
//   const contextValue = {
//     theme: null,
//     toggleTheme: toggleTheme
//   };

//   return (
//     // Wrap the part of the application that needs access to the theme context
//     // with the ThemeContext.Provider
//     <ThemeContext.Provider value={contextValue}>
//       <div className={`app-container ${theme}`}>
//         <h1>Welcome to the App</h1>
//         <MyComponent />
//         {/* Other components can also be here and access the theme */}
//       </div>
//     </ThemeContext.Provider>
//   );
// }

// // export default App;

// // src/App.js
// import React, { useState } from 'react';
// import ThemeContext from './ThemeContext';
// import ThemedComponent from './ThemedComponent'; // We'll create this next
// import AnotherThemedComponent from './AnotherThemedComponent'; // Another component to show context sharing
// import './App.css'; // For basic global styles

// function App() {
//   const [theme, setTheme] = useState('light'); // 'light' or 'dark'

//   const toggleTheme = () => {
//     setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
//   };

//   // The value provided to the context
//   const contextValue = {
//     theme: null,
//     toggleTheme: toggleTheme
//   };

//   return (
//     // Provide the theme context to the entire application
//     <ThemeContext.Provider value={contextValue}>
//       <div className={`app-container ${theme}`}>
//         <h1>Global Theme Example</h1>
//         <button onClick={toggleTheme} className='theme-toggle-button'>
//           Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
//         </button>
//         <ThemedComponent />
//         <AnotherThemedComponent />
//       </div>
//     </ThemeContext.Provider>
//   );
// }

// export default App;

// src/App.js (modified)
import React, { useState } from 'react';
import ThemeContext from './ThemeContext';
import { AuthProvider, useAuth } from './AuthContext'; // Import AuthProvider and useAuth

// Components that will consume context
import ThemedComponent from './ThemedComponent';
import AuthStatusDisplay from './AuthStatusDisplay'; // We'll create this next
import LoginButton from './LoginButton'; // We'll create this next
import './App.css';

function App() {
  // Theme state management (from previous example)
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };
  const themeContextValue = {
    theme,
    toggleTheme
  };

  return (
    // Wrap the entire app with AuthProvider first, then ThemeProvider
    <AuthProvider>
      <ThemeContext.Provider value={themeContextValue}>
        <div className={`app-container ${theme}`}>
          <h1>Context API Demo</h1>
          <button onClick={toggleTheme} className='theme-toggle-button'>
            Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
          </button>
          <hr />
          <AuthStatusDisplay />
          <LoginButton />
          <hr />
          <ThemedComponent />
        </div>
      </ThemeContext.Provider>
    </AuthProvider>
  );
}

export default App;