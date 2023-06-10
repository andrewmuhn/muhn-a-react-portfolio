import React from 'react';
import './App.css';
import Header from './components/Header';
import Project from './components/Project';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="portfolio-app">
      <Navbar />
      <Header />
      <Project />
      <Footer />
    </div>
  );
}

export default App;
