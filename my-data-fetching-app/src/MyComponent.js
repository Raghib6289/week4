import React, { useContext } from 'react';
import MyContext from './MyContext';

function MyComponent() {
  const contextValue = useContext(MyContext);

  const componentStyle = {
    backgroundColor: '#f0f0f0',
    color: '#333',
    padding: '20px',
    margin: '10px',
    borderRadius: '8px'
  };

  return (
    <div style={componentStyle}>
      <p>The current context value is: {contextValue}</p>
    </div>
  );
}

export default MyComponent;

