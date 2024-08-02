import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//(React hooks) - States helps to use functions outside the 'main' function.
const NavBar = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [clickedLink, setClickedLink] = useState(null);


  const handleSearch = async () => {
    try {
      const mainQuery = encodeURIComponent(searchQuery);
      const ShowsRes = await fetch(`https://api.tvmaze.com/search/shows?q=${mainQuery}`);

      if (!ShowsRes.ok) {
        throw new Error('Failed to find show results. Please try again.');
      }
      const films = await ShowsRes.json();


      // Fetch people
      const peopleRes = await fetch(`https://api.tvmaze.com/search/people?q=${mainQuery}`);
      if (!peopleRes.ok) {
        throw new Error('Failed to find people results. Please try again.');
      }
      const people = await peopleRes.json();
  

      navigate('/search-results', { state: { searchResults: films, peopleResults: people } });

    } catch (error) {
      console.error('Error:', error); // If error, then output to console
    }
  };

// Handles clicked links
  const handleLinkClick = (index) => {
    setClickedLink(index);
  };
  

    return (
      <div className='NavNav'>
        <Navbar expand="lg">
          <Container fluid>
          <Navbar.Brand href='/'><FontAwesomeIcon icon="film" className='icon-field'/>ShowHub</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                <div className='dropMenu'>
                                <Dropdown>    
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Menu
      </Dropdown.Toggle>
      <Dropdown.Menu className='dropMenu'>
        <Dropdown.Item href="#/action-1">Coming soon 1</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Coming soon 2</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Coming soon 3</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    </div>
                <Button
                  variant="link"
                  href="/"
                  onClick={() => handleLinkClick(1)}
                  className={clickedLink === 1 ? 'clicked-link' : ''}
                >
                  <FontAwesomeIcon icon="home" className='icon-field'/>
                  Home
                </Button>
                
                <Button
                  variant="link"
                  href="/all-shows"
                  onClick={() => handleLinkClick(2)}
                  className={clickedLink === 2 ? 'clicked-link' : ''}
                >
                  <FontAwesomeIcon icon="tv" className='icon-field'/>
                  Shows
                </Button>
                
              </Nav>
              <Form className="d-flex" onSubmit={(e) => { e.preventDefault(); handleSearch(); }}>
  <div className='field'>
    <Form.Control
      type="search"
      placeholder="Search"
      className="me-2"
      aria-label="Search"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      required
    />
  </div>
  <Button variant="outline-success" type="submit">
    Search
  </Button>
</Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
  

export default NavBar;