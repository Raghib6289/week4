import React from 'react';
import PropTypes from 'prop-types'; // For prop type validation
import './Button.css'; // Assuming CSS is handled separately for now

function Button({ children, variant = 'primary', size = 'medium', onClick, disabled, ...rest }) {
  const buttonClasses = [
    'btn',
    `btn-${variant}`,
    `btn-${size}`,
    disabled ? 'btn-disabled' : '',
  ].join(' ');

  return (
    <button className={buttonClasses} onClick={onClick} disabled={disabled} {...rest}>
      {children}
    </button>
  );
}

// Define prop types for better developer experience and error checking
Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary', 'danger']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

export default Button;