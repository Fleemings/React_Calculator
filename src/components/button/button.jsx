import React from 'react';
import './button.css';
const Button = (props) => {
  return <button className='button'>{props.label}</button>;
};

export default Button;
