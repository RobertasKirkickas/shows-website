// HomePage (Website's main page)

import React from 'react';
import NavBar from './components/Navbar';
import  MainCarousel from './components/Carousel';
import ActorsDisplay from './components/ActorsDisplay';
import ShowsDisplay from './components/ShowsDisplay'


const HomePage = () => {
  return (
    <div className='html'>
      < NavBar />
      < MainCarousel />
      <br/>
      <div className='home-page topic-color'>
      <h1>Some actors you may know</h1>
      </div>
      <div className='home-page'>
      <ActorsDisplay/>
      </div>
      <br/>
      <br/>
      <div className='home-page topic-color'>
      <h1>Shows you may like</h1>
      </div>
      <div className='home-page'>
      <ShowsDisplay/>
      <br/>      <br/>      <br/>      <br/>
      </div>
    </div>
  );
};

export default HomePage;
