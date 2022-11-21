import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Calculator from './main/calculator';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <h1>Calculator</h1>
    <Calculator />
  </>
);
