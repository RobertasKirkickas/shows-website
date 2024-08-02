import React, { useState, useEffect } from 'react';
import NavBar from './components/Navbar';
import noImg from './components/images/noImg.jpg';

const AllShowsHere = () => {
  const [allShows, setAllShows] = useState([]);
  const [selectedShow, setSelectedShow] = useState(null);

  useEffect(() => {
    const getTheShows = async () => {
      try {
        // Fetch the list of shows
        const response = await fetch('https://api.tvmaze.com/shows');
        const shows = await response.json();

        // Set the array of shows in the state
        setAllShows(shows);
      } catch (error) {
        console.error('Error while fetching:', error); // If error, then output to console
      }
    };

    getTheShows();
  }, []); // Runs the function when the page loads

  const openPopup = (show) => {
    setSelectedShow(show);
  };

  const closePopup = () => {
    setSelectedShow(null);
  };

  return (
    <div>
      <NavBar />
      <br />
      <h1 className='topic-color'>The full schedule of all future episodes</h1>
      <br /><br /><br />

      <div className='resultsPageContainer'>
        {allShows.length === 0 ? (
          <p className='container1 h1c1'>No shows found.</p>
        ) : (
          <div className='container1'>
            <h2 className='container1 h1c1'>Available Shows</h2>
            <div className='container1 li'>
              {allShows.map((result, index) => (
                <li key={index}>
                  {result.name} <br />
                  {result.image && result.image.medium ? (
                    <img src={result.image.medium} alt={result.name} />
                  ) : (
                    <img
                      src={noImg}
                      alt='empty'
                      width={210}
                      height={295}
                      style={{ maxWidth: '100%', height: 'auto' }}
                    />
                  )}
                  <br />
                  <button
                    className="btn btn-secondary"
                    onClick={() => openPopup(result)}
                  >
                    More info
                  </button>
                </li>
              ))}
            </div>
          </div>
        )}

        {selectedShow && (
          <div className="popup">
            <div className="popup-content">
              <button className="close-btn" onClick={closePopup}>
                Close
              </button>
              <h2>{selectedShow.name}</h2>
              <p>Genre: {selectedShow.genres.join(', ')}</p>
              <p>Rating: {selectedShow.rating.average}</p>
              <br/>
              <div dangerouslySetInnerHTML={{ __html: `About:` + selectedShow.summary }} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllShowsHere;
