import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import AppProvider from './context/index';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <AppProvider>
      <React.Suspense fallback={<p>Loading the Page...</p>}>
        <App />
      </React.Suspense>
    </AppProvider>
  </React.StrictMode>
);
