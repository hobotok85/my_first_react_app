import React, { StrictMode } from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import './index.css';
import { Header } from './App';
import App from './App';

// ReactDOM.render (
//   <StrictMode>
//     <App/>
//   </StrictMode>,
//   document.getElementById ('root')
// )

const rootElement = (document.getElementById('root'));
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App/>
  </StrictMode>
);
