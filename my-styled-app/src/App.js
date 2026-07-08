// // // // import React from 'react';
// // // // import styled from 'styled-components';

// // // // const Container = styled.div`
// // // //   display: flex;
// // // //   flex-direction: column;
// // // //   align-items: center;
// // // //   justify-content: center;
// // // //   min-height: 100vh;
// // // //   background-color: #e0f7fa;
// // // //   font-family: 'Arial', sans-serif;
// // // // `;

// // // // const Title = styled.h1`
// // // //   color: #00796b;
// // // //   font-size: 3em;
// // // //   margin-bottom: 0.5em;
// // // //   text-shadow: 1px 1px 2px rgba(0,0,0,0.1);
// // // // `;

// // // // const Subtitle = styled.p`
// // // //   color: #004d40;
// // // //   font-size: 1.2em;
// // // // `;

// // // // function App() {
// // // //   return (
// // // //     <Container>
// // // //       <Title>Welcome to Styled Components!</Title>
// // // //       <Subtitle>Styling made easy and maintainable.</Subtitle>
// // // //     </Container>
// // // //   );
// // // // }

// // // // export default App;

// // // import React from 'react';
// // // import styled from 'styled-components';
// // // import StyledButton from './Button'; // Assuming Button.js is in src/components

// // // const AppContainer = styled.div`
// // //   display: flex;
// // //   flex-direction: column;
// // //   align-items: center;
// // //   justify-content: center;
// // //   min-height: 100vh;
// // //   background-color: #f8f9fa;
// // //   font-family: 'Arial', sans-serif;
// // //   padding: 20px;
// // // `;

// // // function App() {
// // //   return (
// // //     <AppContainer>
// // //       <h2>Styled Button Examples</h2>
// // //       <StyledButton>Primary Button</StyledButton>
// // //       <StyledButton disabled>Disabled Button</StyledButton>
// // //       {/* We'll add more variations later */}
// // //     </AppContainer>
// // //   );
// // // }

// // // export default App;
// // import React from 'react';
// // import styled from 'styled-components';
// // import StyledButton from './Button';
// // import StyledInput from './Input';

// // const AppContainer = styled.div`
// //   display: flex;
// //   flex-direction: column;
// //   align-items: center;
// //   justify-content: center;
// //   min-height: 100vh;
// //   background-color: #f8f9fa;
// //   font-family: 'Arial', sans-serif;
// //   padding: 20px;
// // `;

// // function App() {
// //   return (
// //     <AppContainer>
// //       <h2>Styled Component Examples</h2>
// //       <StyledButton>Click Me</StyledButton>
// //       <StyledButton disabled>Cannot Click</StyledButton>

// //       <h3>Form Elements</h3>
// //       <StyledInput type='text' placeholder='Enter your name' />
// //       <StyledInput type='email' placeholder='Enter your email' />
// //     </AppContainer>
// //   );
// // }

// // export default App;


// import React from 'react';
// import styled from 'styled-components';
// import StyledButton from './Button';
// import StyledInput from './Input';

// const AppContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   min-height: 100vh;
//   background-color: #f8f9fa;
//   font-family: 'Arial', sans-serif;
//   padding: 20px;
// `;

// const ButtonGroup = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: center;
//   margin-top: 20px;
// `;

// function App() {
//   return (
//     <AppContainer>
//       <h2>Styled Component Examples</h2>
//       <h3>Buttons with Variations and Sizes</h3>
//       <ButtonGroup>
//         <StyledButton variant='primary' size='medium'>Medium Primary</StyledButton>
//         <StyledButton variant='secondary' size='large'>Large Secondary</StyledButton>
//         <StyledButton variant='danger' size='small'>Small Danger</StyledButton>
//         <StyledButton size='medium'>Default Size</StyledButton>
//         <StyledButton disabled size='large'>Disabled Large</StyledButton>
//       </ButtonGroup>

//       <h3>Form Elements</h3>
//       <StyledInput type='text' placeholder='Enter your name' />
//       <StyledInput type='email' placeholder='Enter your email' />
//     </AppContainer>
//   );
// }
// export default App;

import React from 'react';
import styled from 'styled-components';
import { StyledButton, OutlinedButton } from './Button'; // Import both
import StyledInput from './Input';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f8f9fa;
  font-family: 'Arial', sans-serif;
  padding: 20px;
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 20px;
`;

function App() {
  return (
    <AppContainer>
      <h2>Styled Component Examples</h2>
      <h3>Solid Buttons</h3>
      <ButtonGroup>
        <StyledButton variant='primary' size='medium'>Medium Primary</StyledButton>
        <StyledButton variant='secondary' size='large'>Large Secondary</StyledButton>
        <StyledButton variant='danger' size='small'>Small Danger</StyledButton>
        <StyledButton size='medium'>Default Size</StyledButton>
        <StyledButton disabled size='large'>Disabled Large</StyledButton>
      </ButtonGroup>

      <h3>Outlined Buttons (Extended)</h3>
      <ButtonGroup>
        <OutlinedButton variant='primary' size='medium'>Medium Primary</OutlinedButton>
        <OutlinedButton variant='secondary' size='large'>Large Secondary</OutlinedButton>
        <OutlinedButton variant='danger' size='small'>Small Danger</OutlinedButton>
        <OutlinedButton size='medium'>Default Outlined</OutlinedButton>
        <OutlinedButton disabled size='large'>Disabled Outlined</OutlinedButton>
      </ButtonGroup>

      <h3>Form Elements</h3>
      <StyledInput type='text' placeholder='Enter your name' />
      <StyledInput type='email' placeholder='Enter your email' />
    </AppContainer>
  );
}

export default App;