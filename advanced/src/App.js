// // // // // src/App.js
// // // // import React from 'react';
// // // // import Alert from './Alert';
// // // // import './App.css'; // Assuming you have some basic CSS

// // // // function App() {
// // // //   return (
// // // //     <div className='App'>
// // // //       <h1>My Application</h1>
// // // //       <Alert message='This is a success message!' />
// // // //       <Alert message='An error occurred. Please try again.' />
// // // //     </div>
// // // //   );
// // // // }

// // // // export default App;

// // // import React from 'react';
// // // import Card from './Card';
// // // import './App.css'; // Assuming you have some basic CSS for Card

// // // function App() {
// // //   return (
// // //     <div className='App'>
// // //       <h1>Using the Reusable Card Component</h1>

// // //       <Card title='User Profile'>
// // //         <p>This is the content of the first card.</p>
// // //         <img src='https://via.placeholder.com/100' alt='Placeholder Image' />
// // //       </Card>

// // //       <Card title='Product Details'>
// // //         <ul>
// // //           <li>Product Name: Gadget Pro</li>
// // //           <li>Price: $199.99</li>
// // //         </ul>
// // //       </Card>

// // //       <Card> {/* Card without a title */}
// // //         <p>This card has no title, demonstrating flexibility.</p>
// // //       </Card>
// // //     </div>
// // //   );
// // // }

// // // export default App;

// // // src/App.js
// // import React from 'react';
// // import Accordion from './Accordion';
// // import './App.css';

// // function App() {
// //   return (
// //     <div className='App'>
// //       <Accordion>
// //         <Accordion.Item index={0}>
// //           <Accordion.Header>Section 1</Accordion.Header>
// //           <Accordion.Content>Content for section 1.</Accordion.Content>
// //         </Accordion.Item>
// //         <Accordion.Item index={1}>
// //           <Accordion.Header>Section 2</Accordion.Header>
// //           <Accordion.Content>Content for section 2.</Accordion.Content>
// //         </Accordion.Item>
// //       </Accordion>
// //     </div>
// //   );
// // }

// // export default App;


// // src/App.js
// import React from 'react';
// import MouseTracker from './MouseTracker';
// import './App.css';

// function App() {
//   return (
//     <div className='App'>
//       <h1>Track Mouse Position</h1>
//       <MouseTracker
//         render={({ x, y }) => ( // The render prop function receives the position
//           <p>The current mouse position is ({x}, {y})</p>
//         )}
//       />
//     </div>
//   );
// }

// export default App;

// src/App.js (assuming Button is imported from your library)
import React from 'react';
import Button from './Button'; // Hypothetical import path
import './Button.css';

function App() {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <div className='App'>
      <h1>Using Components from Library</h1>
      <Button variant='primary' size='medium' onClick={handleClick}>
        Primary Action
      </Button>
      <Button variant='secondary' size='small'>
        Secondary Action
      </Button>
      <Button variant='danger' size='large' onClick={handleClick}>
        Delete Item
      </Button>
      <Button disabled>
        Disabled Button
      </Button>
    </div>
  );
}

export default App;