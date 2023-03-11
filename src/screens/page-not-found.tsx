import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}
    >
      Page Not Found.... Try to search another movie.
      <Link to="/">Back to Discover</Link>
    </div>
  );
};
export default PageNotFound;
