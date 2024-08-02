import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import NavBar from './components/Navbar';
import noImg from './components/images/noImg.jpg';

const SearchResultsPage = () => {
  const location = useLocation();
  const { state } = location;
  const [selectedShow, setSelectedShow] = useState(null);
  const [selectedPerson, setSelectedPerson] = useState(null);

  const openPopup = (show) => {
    setSelectedShow(show);
  };

  const openPopupPeople = (person) => {
    setSelectedPerson(person);
  };

  const closePopup = () => {
    setSelectedShow(null);
    setSelectedPerson(null);
  };

  const closePopupPeople = () => {
    setSelectedPerson(null);
  };

  return (
    <div>
      <NavBar />
      <br />
      <h1 className='topic-color'>Search Results</h1>
      <br /><br /><br />

      <div className='resultsPageContainer'>
        {state && state.searchResults && state.searchResults.length > 0 ? (
          <div className='container'>
            <h2 className='container1 h1c1'>Shows</h2>
            <div className='container1 li'>
              {state.searchResults.map((result, index) => (
                <li key={index}>
                  <br/>
                  {result.show.name} <br />
                  {result.show.image && result.show.image.medium ? (
                    <img src={result.show.image.medium} alt={result.show.name} />
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
                    onClick={() => openPopup(result.show)}
                  >
                    More Info
                  </button>
                </li>
              ))}
            </div>
          </div>
        ) : (
          <p className='container1 h1c1'>No shows found.</p>
        )}

        <br />

        {state && state.peopleResults && state.peopleResults.length > 0 ? (
          <div className='container'>
            <h2 className='container2 h1c2'>People</h2>
            <ol className='container2 li'>
              {state.peopleResults.map((result, index) => (
                <li key={index}>
                  <br/>
                  {result.person.name} <br />
                  {result.person.image && result.person.image.medium ? (
                    <img src={result.person.image.medium} alt={result.person.name} />
                  ) : (
                    <img
                      src={noImg}
                      alt='empty'
                      width={300}
                      height={295}
                      style={{ maxWidth: '100%', height: 'auto' }}
                    />
                  )} <br />
                  <button
                    className="btn btn-secondary"
                    onClick={() => openPopupPeople(result.person)}
                  >
                    More Info
                  </button><br /><br />
                </li>
              ))}
            </ol>
          </div>
        ) : (
          <p className='container2 h1c2'>No people found.</p>
        )}

        {selectedShow && (
          <div className="popup">
            <div className="popup-content">
              <button className="close-btn" onClick={closePopup}>
                Close
              </button>
              <h2>{selectedShow.name}</h2>
              {selectedShow.genres && (
                <p>Genre: {selectedShow.genres.join(', ')}</p>
              )}
              <p>Rating: {selectedShow.rating && selectedShow.rating.average}</p>
              <br />
              <div dangerouslySetInnerHTML={{ __html: `About:` + selectedShow.summary }} />
            </div>
          </div>
        )}
        
        {selectedPerson && (
        <div className="popup">
          <div className="popup-content">
            <button className="close-btn" onClick={closePopupPeople}>
        Close
        </button>
        <h2>{selectedPerson.name}</h2>
        {selectedPerson.image && selectedPerson.image.original && (
        <h3><img src={selectedPerson.image.medium} alt='' /></h3>
        )}
        {selectedPerson.birthday && (
        <p>Born: {selectedPerson.birthday}</p>
      )}
      {selectedPerson.country && selectedPerson.country.name && (
        <p>Location: {selectedPerson.country.name}</p>
      )}
    </div>
  </div>
)}
      </div>
    </div>
  );
};

export default SearchResultsPage;
