// // // import styled from 'styled-components';

// // // const StyledButton = styled.button`
// // //   /* Base styles for all buttons */
// // //   display: inline-block;
// // //   padding: 10px 20px;
// // //   margin: 5px;
// // //   font-size: 1em;
// // //   font-weight: bold;
// // //   text-align: center;
// // //   text-decoration: none;
// // //   cursor: pointer;
// // //   border: 2px solid transparent;
// // //   border-radius: 5px;
// // //   transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;

// // //   /* Default button style (can be overridden by variations) */
// // //   background-color: #007bff;
// // //   color: white;
// // //   border-color: #007bff;

// // //   &:hover {
// // //     background-color: #0056b3;
// // //     border-color: #0056b3;
// // //   }

// // //   &:active {
// // //     background-color: #004085;
// // //     border-color: #004085;
// // //   }

// // //   /* Disabled state */
// // //   &:disabled {
// // //     background-color: #cccccc;
// // //     color: #666666;
// // //     cursor: not-allowed;
// // //     border-color: #cccccc;
// // //   }
// // // `;

// // // export default StyledButton;

// // import styled, { css } from 'styled-components';

// // // Helper function to define button variations
// // const buttonStyles = css`
// //   /* Base styles for all buttons */
// //   display: inline-block;
// //   padding: 10px 20px;
// //   margin: 5px;
// //   font-size: 1em;
// //   font-weight: bold;
// //   text-align: center;
// //   text-decoration: none;
// //   cursor: pointer;
// //   border: 2px solid transparent;
// //   border-radius: 5px;
// //   transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;

// //   &:hover {
// //     filter: brightness(90%); /* General hover effect */
// //   }

// //   &:active {
// //     filter: brightness(80%); /* General active effect */
// //   }

// //   &:disabled {
// //     background-color: #cccccc;
// //     color: #666666;
// //     cursor: not-allowed;
// //     border-color: #cccccc;
// //     filter: none; /* Remove brightness effect for disabled */
// //   }
// // `;

// // // Define variations based on props
// // const primaryStyles = css`
// //   background-color: #007bff;
// //   color: white;
// //   border-color: #007bff;
// // `;

// // const secondaryStyles = css`
// //   background-color: #6c757d;
// //   color: white;
// //   border-color: #6c757d;
// // `;

// // const dangerStyles = css`
// //   background-color: #dc3545;
// //   color: white;
// //   border-color: #dc3545;
// // `;

// // const StyledButton = styled.button`
// //   ${buttonStyles}

// //   /* Apply specific styles based on the 'variant' prop */
// //   ${props => {
// //     switch (props.variant) {
// //       case 'secondary':
// //         return secondaryStyles;
// //       case 'danger':
// //         return dangerStyles;
// //       case 'primary':
// //       default:
// //         return primaryStyles;
// //     }
// //   }}
// // `;

// // export default StyledButton;

// import styled, { css } from 'styled-components';

// const buttonStyles = css`
//   /* Base styles */
//   display: inline-block;
//   font-weight: bold;
//   text-align: center;
//   text-decoration: none;
//   cursor: pointer;
//   border: 2px solid transparent;
//   border-radius: 5px;
//   transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease, padding 0.3s ease, font-size 0.3s ease;

//   &:hover {
//     filter: brightness(90%);
//   }

//   &:active {
//     filter: brightness(80%);
//   }

//   &:disabled {
//     background-color: #cccccc;
//     color: #666666;
//     cursor: not-allowed;
//     border-color: #cccccc;
//     filter: none;
//   }
// `;

// const primaryStyles = css`
//   background-color: #007bff;
//   color: white;
//   border-color: #007bff;
// `;

// const secondaryStyles = css`
//   background-color: #6c757d;
//   color: white;
//   border-color: #6c757d;
// `;

// const dangerStyles = css`
//   background-color: #dc3545;
//   color: white;
//   border-color: #dc3545;
// `;

// // Define size variations
// const sizeStyles = css`
//   ${props => {
//     switch (props.size) {
//       case 'large':
//         return css`
//           padding: 12px 24px;
//           font-size: 1.1em;
//         `;
//       case 'small':
//         return css`
//           padding: 8px 16px;
//           font-size: 0.9em;
//         `;
//       case 'medium':
//       default:
//         return css`
//           padding: 10px 20px;
//           font-size: 1em;
//         `;
//     }
//   }}
// `;

// const StyledButton = styled.button`
//   ${buttonStyles}
//   ${sizeStyles}

//   /* Apply specific styles based on the 'variant' prop */
//   ${props => {
//     switch (props.variant) {
//       case 'secondary':
//         return secondaryStyles;
//       case 'danger':
//         return dangerStyles;
//       case 'primary':
//       default:
//         return primaryStyles;
//     }
//   }}
// `;

// export default StyledButton;
import styled, { css } from 'styled-components';

// Base styles for all buttons
const buttonStyles = css`
  display: inline-block;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease, padding 0.3s ease, font-size 0.3s ease;

  &:hover {
    filter: brightness(90%);
  }

  &:active {
    filter: brightness(80%);
  }

  &:disabled {
    background-color: #cccccc;
    color: #666666;
    cursor: not-allowed;
    border-color: #cccccc;
    filter: none;
  }
`;

// Primary, Secondary, Danger variations
const primaryStyles = css`
  background-color: #007bff;
  color: white;
  border-color: #007bff;
`;

const secondaryStyles = css`
  background-color: #6c757d;
  color: white;
  border-color: #6c757d;
`;

const dangerStyles = css`
  background-color: #dc3545;
  color: white;
  border-color: #dc3545;
`;

// Size variations
const sizeStyles = css`
  ${props => {
    switch (props.size) {
      case 'large':
        return css`
          padding: 12px 24px;
          font-size: 1.1em;
        `;
      case 'small':
        return css`
          padding: 8px 16px;
          font-size: 0.9em;
        `;
      case 'medium':
      default:
        return css`
          padding: 10px 20px;
          font-size: 1em;
        `;
    }
  }}
`;

// Base StyledButton component
const StyledButton = styled.button`
  ${buttonStyles}
  ${sizeStyles}

  ${props => {
    switch (props.variant) {
      case 'secondary':
        return secondaryStyles;
      case 'danger':
        return dangerStyles;
      case 'primary':
      default:
        return primaryStyles;
    }
  }}
`;

// New component: OutlinedButton, extending StyledButton
const OutlinedButton = styled(StyledButton)`
  /* Override base styles and add new ones */
  background-color: transparent;
  border-width: 2px;

  /* Dynamically set border and text color based on variant */
  ${props => {
    switch (props.variant) {
      case 'secondary':
        return css`
          color: #6c757d;
          border-color: #6c757d;
          &:hover {
            background-color: #6c757d;
            color: white;
            filter: none;
          }
        `;
      case 'danger':
        return css`
          color: #dc3545;
          border-color: #dc3545;
          &:hover {
            background-color: #dc3545;
            color: white;
            filter: none;
          }
        `;
      case 'primary':
      default:
        return css`
          color: #007bff;
          border-color: #007bff;
          &:hover {
            background-color: #007bff;
            color: white;
            filter: none;
          }
        `;
    }
  }}

  /* Ensure disabled state still works correctly */
  &:disabled {
    background-color: transparent;
    color: #cccccc;
    border-color: #cccccc;
    filter: none;
  }
`;

export { StyledButton, OutlinedButton };