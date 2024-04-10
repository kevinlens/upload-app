import React from 'react';

const defaultButton = {
  backgroundColor: '#234066',
  color: 'white',
  padding: '11px 24px',
  border: 'none',
  width: '185px',
};

const defaultStyles = {
  fontSize: '11px',
  cursor: 'pointer',
  display: 'flex',
  justifyContent: 'center',
  borderRadius: '5px',
  alignItems: 'center',
};

const Button = ({ buttonStyle = defaultButton, children }) => {
  return <div style={{ ...buttonStyle, ...defaultStyles }}>{children}</div>;
};

export default Button;
