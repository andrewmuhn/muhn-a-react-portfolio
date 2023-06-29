import React from 'react';
import './Header.css';
import Navigation from './Navigation';

const Header = ({ currentPage, handlePageChange }) => {
  return (
    <header className="container gx-0 header">
      <div className="d-flex flex-column flex-md-row justify-content-md-between">
        <h1 className="text-center">Andrew Muhn</h1>
        <Navigation
          currentPage={currentPage}
          handlePageChange={handlePageChange}
        />
      </div>
    </header>
  );
};

export default Header;
