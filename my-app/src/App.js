// import './App.css';
// import Greeting from './Greeting';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>Welcome to My First React App!</h1>
//         <p>This is a custom message displayed using JSX.</p>
//         <p>The current year is: {new Date().getFullYear()}</p>
//         <Greeting name="John Doe" />
//       </header>
//     </div>
//   );
// }

// export default App;


// src/App.js
// import React from 'react';
// import Greeting from './components/Greeting'; // Import the Greeting component
// import './App.css'; // Assuming you have some basic styling

// function App() {
//   return (
//     <div className='App'>
//       <header className='App-header'>
//         <h1>My React Application</h1>
        
//         {/* Render the Greeting component here */}
//         <Greeting name='Raghib' />
        
//       </header>
//     </div>
//   );
// }

// export default App;


// src/App.js

// import React from 'react';
// import Greeting from './Greeting';
// import Header from './Header'; // Import the Header component
// import './App.css';

// function App() {
//   return (
//     <div className='App'>
//       <Header /> {/* Render the Header component */}
//       <div className='App-body'>
//         <h2>User Greeting:</h2>
//         <Greeting name='Developer' /> {/* Updated name prop */}
//       </div>
//     </div>
//   );
// }

// export default App;


// src/App.js
// import React from 'react';
// import Header from './Header';
// import UserProfile from './UserProfile'; // Import UserProfile
// import './App.css';

// function App() {
//   return (
//     <div className='App'>
//       <Header />
//       <div className='App-body'>
//         <h2>User Information:</h2>
        
//         {/* Render UserProfile and pass props */}
//         <UserProfile name='Alice' age={30} />
//         <UserProfile name='Bob' age={25} />
        
//       </div>
//     </div>
//   );
// }

// export default App;

// src/App.js

// import React from 'react';
// import Header from './Header';
// import UserProfile from './UserProfile';
// import './App.css';

// function App() {
//   return (
//     <div className='App'>
//       <Header />
//       <div className='App-body'>
//         <h2>User Information:</h2>
//         <UserProfile name='Alice' age={30} />
//         <UserProfile name='Bob' age={25} />
//       </div>
//     </div>
//   );
// }

// export default App;

// src/App.js

// import React from 'react';
// import Header from './Header';
// import UserProfile from './UserProfile';
// import Counter from './Counter'; // Import the Counter component
// import './App.css';

// function App() {
//   return (
//     <div className='App'>
//       <Header />
//       <div className='App-body'>
//         <h2>User Information:</h2>
//         <UserProfile name='Alice' age={30} />
//         <UserProfile name='Bob' age={25} />
        
//         <hr /> {/* Separator */}
        
//         <h2>Interactive Counter:</h2>
//         <Counter /> {/* Render the Counter component */}
        
//       </div>
//     </div>
//   );
// }

// export default App;

// src/App.js (updated)

// import React from 'react';
// import Header from './Header';
// import UserProfile from './UserProfile';
// import Counter from './Counter';
// import SimpleForm from './SimpleForm'; // Import SimpleForm
// import './App.css';

// function App() {
//   return (
//     <div className='App'>
//       <Header />
//       <div className='App-body'>
//         <h2>User Information:</h2>
//         <UserProfile name='Alice' age={30} />
//         <UserProfile name='Bob' age={25} />
        
//         <hr />
        
//         <h2>Interactive Counter:</h2>
//         <Counter />
        
//         <hr />
        
//         <h2>Form Example:</h2>
//         <SimpleForm /> {/* Render the SimpleForm component */}
        
//       </div>
//     </div>
//   );
// }

// export default App;

// import React from 'react';
// import Header from './Header';
// import UserProfile from './UserProfile';
// import Counter from './Counter';
// import SimpleForm from './SimpleForm';
// import DataDisplay from './DataDisplay'; // Import DataDisplay
// import './App.css';

// function App() {
//   return (
//     <div className='App'>
//       <Header />
//       <div className='App-body'>
//         <h2>User Information:</h2>
//         <UserProfile name='Alice' age={30} />
//         <UserProfile name='Bob' age={25} />
        
//         <hr />
        
//         <h2>Interactive Counter:</h2>
//         <Counter />
        
//         <hr />
        
//         <h2>Form Example:</h2>
//         <SimpleForm />
        
//         <hr />
        
//         <h2>Data Fetching Example:</h2>
//         <DataDisplay /> {/* Render the DataDisplay component */}
        
//       </div>
//     </div>
//   );
// }

// export default App;


// import React from 'react';
// import Header from './Header';
// import UserProfile from './UserProfile';
// import Counter from './Counter';
// import SimpleForm from './SimpleForm';
// import DataDisplay from './DataDisplay';
// import TaskListContainer from './TaskListContainer'; // Import TaskListContainer
// import './App.css';

// function App() {
//   return (
//     <div className='App'>
//       <Header />
//       <div className='App-body'>
//         <h2>User Information:</h2>
//         <UserProfile name='Alice' age={30} />
//         <UserProfile name='Bob' age={25} />
        
//         <hr />
        
//         <h2>Interactive Counter:</h2>
//         <Counter />
        
//         <hr />
        
//         <h2>Form Example:</h2>
//         <SimpleForm />
        
//         <hr />
        
//         <h2>Data Fetching Example:</h2>
//         <DataDisplay />
        
//         <hr />
        
//         <h2>Task Management Example:</h2>
//         <TaskListContainer /> {/* Render the TaskListContainer */}
        
//       </div>
//     </div>
//   );
// }

// export default App;

// Import and render RegistrationForm in your main App.js file.

// src/App.js

// import React from 'react';
// import RegistrationForm from './RegistrationForm';
// import './App.css'; // Assuming you have some basic CSS

// function App() {
//   return (
//     <div className='App'>
//       <h1>React Hooks Demo</h1>
//       <RegistrationForm />
//     </div>
//   );
// }

// export default App;

// src/App.js (updated)
// import React from 'react';
// import RegistrationForm from './RegistrationForm';
// import ToggleSwitch from './ToggleSwitch';
// import './App.css';

// function App() {
//   return (
//     <div className='App'>
//       <h1>React Hooks Demo</h1>
//       <RegistrationForm />
//       <hr /> {/* Separator */}
//       <ToggleSwitch />
//     </div>
//   );
// }

// export default App;


// src/App.js (updated)
// import React from 'react';
// import RegistrationForm from './RegistrationForm';
// import ToggleSwitch from './ToggleSwitch';
// import CartItem from './CartItem';
// import './App.css';

// function App() {
//   return (
//     <div className='App'>
//       <h1>React Hooks Demo</h1>
//       <RegistrationForm />
//       <hr />
//       <ToggleSwitch />
//       <hr />
//       <h2>Shopping Cart Simulation</h2>
//       <CartItem productName='Wireless Mouse' initialQuantity={2} price={25.99} />
//       <CartItem productName='Mechanical Keyboard' initialQuantity={1} price={79.50} />
//       <CartItem productName='USB-C Hub' initialQuantity={3} price={35.00} />
//     </div>
//   );
// }

// export default App;


// src/App.js (updated)
import React from 'react';
import RegistrationForm from './RegistrationForm';
import ToggleSwitch from './ToggleSwitch';
import CartItem from './CartItem';
import SearchComponent from './SearchComponent';
import './App.css';

function App() {
  return (
    <div className='App'>
      <h1>React Hooks Demo</h1>
      <RegistrationForm />
      <hr />
      <ToggleSwitch />
      <hr />
      <h2>Shopping Cart Simulation</h2>
      <CartItem productName='Wireless Mouse' initialQuantity={2} price={25.99} />
      <CartItem productName='Mechanical Keyboard' initialQuantity={1} price={79.50} />
      <CartItem productName='USB-C Hub' initialQuantity={3} price={35.00} />
      <hr />
      <SearchComponent />
    </div>
  );
}

export default App;
