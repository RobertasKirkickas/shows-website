
import { Carousel } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';



const MainCarousel = () => {
  const [showImage, setShowImage] = useState('');
  const [showImage2, setShowImage2] = useState('');
  const [showImage3, setShowImage3] = useState('');


  useEffect(() => {
    const getRandomName = async () => {
      try {
        // Fetch the list of people
        const response = await fetch('https://api.tvmaze.com/shows');
        const data = await response.json();

        // Choose a random shows from the list
        const randomPick = data[Math.floor(Math.random() * data.length)];
        const randomPick2 = data[Math.floor(Math.random() * data.length)];
        const randomPick3 = data[Math.floor(Math.random() * data.length)];


        // Use and set the selected show, picture/image
        if (randomPick && randomPick.image.original) {
          setShowImage(randomPick.image.original);
          
          if (randomPick2 && randomPick2.image.original) {
            setShowImage2(randomPick2.image.original);
          }
          
          if (randomPick3 && randomPick3.image.original) {
            setShowImage3(randomPick3.image.original);
          }


        } else {
          console.error('Failed to get random show from API.');
        }
      } catch (error) {
        console.error('Error while fetching:', error); // If error, then output to console
      }
    };

    getRandomName();
  }, []); // Runs the function when the page loads


  return (
      <div className='index-carousel'>
    <Carousel>
      <Carousel.Item>
      <img
        src={showImage}
        alt='empty'
        width={210}
        height={295}
        style={{ width: '650px', height: '600px' }}/>
      </Carousel.Item>
      <Carousel.Item>
      <img
        src={showImage2}
        alt='empty'
        width={210}
        height={295}
        style={{ width: '650px', height: '600px' }}/>
      </Carousel.Item>
      <Carousel.Item>
      <img
        src={showImage3}
        alt='empty'
        width={210}
        height={295}
        style={{ width: '650px', height: '600px' }}/>
        </Carousel.Item>
    </Carousel>
    </div>

  );
}




export default MainCarousel;
