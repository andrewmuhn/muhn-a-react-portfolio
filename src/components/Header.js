import React from 'react';
import Navigation from './Navigation';

const Header = ({ currentPage, handlePageChange }) => {
  return (
    <header className="header">
      <h1>Andrew Muhn</h1>
      <Navigation
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
    </header>
  );
};

export default Header;
