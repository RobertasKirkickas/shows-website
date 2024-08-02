// Main file to interconnect website's links, etc

import React from 'react';
import { Routes, Route } from 'react-router-dom'; // react dom help links to work using Route/s
import HomePage from './HomePage'; // Main index page (home page)
import SearchResultsPage from './SearchResultsPage'; // Search results page
import './App.scss'; // Sass stylesheet
import AllShows from './AllShows'; // 'Shows' link

const App = () => {
  return (
    <div className='html'>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search-results" element={<SearchResultsPage />} />
        <Route path="/all-shows" element={<AllShows />} />
      </Routes>
    </div>
  );
};

export default App;