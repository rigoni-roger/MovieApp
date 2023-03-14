import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import LoadPage from './components/load-page';
import AppProvider from './context/index';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <AppProvider>
      <React.Suspense fallback={<LoadPage />}>
        <App />
      </React.Suspense>
    </AppProvider>
  </React.StrictMode>
);
