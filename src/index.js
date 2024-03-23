import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import { ThemeProvider } from '@emotion/react';
// import { Theme } from './Theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <ThemeProvider theme={Theme}> */}
        <App />
    {/* </ThemeProvider> */}
  </React.StrictMode>
);


