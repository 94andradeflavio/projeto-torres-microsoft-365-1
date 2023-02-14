import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import WindowController from './pages/WindowController';

// Scorm provider
import ScormProvider from './contexts/Scorm/ScormProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <BrowserRouter>
  //     <ScormProvider>
  //       <App />
  //     </ScormProvider>
  //   </BrowserRouter>
  // </React.StrictMode>
  <BrowserRouter>
    <ScormProvider>
      <WindowController />
    </ScormProvider>
  </BrowserRouter>
);