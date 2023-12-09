import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { useBootstrapBreakpoints } from 'react-bootstrap/esm/ThemeProvider';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <App/>
  </React.StrictMode>
);

