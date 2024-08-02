import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';

const ShowsDisplay = () => {
  const [randomShow, setRandomShow] = useState('');
  const [showImage, setShowImage] = useState('');
  const [randomShow2, setRandomShow2] = useState('');
  const [showImage2, setShowImage2] = useState('');
  const [randomShow3, setRandomShow3] = useState('');
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
        if (randomPick && randomPick.name && randomPick.image.medium) {
          setRandomShow(randomPick.name);
          setShowImage(randomPick.image.medium);
          
          if (randomPick2 && randomPick2.name && randomPick2.image.medium) {
            setRandomShow2(randomPick2.name);
            setShowImage2(randomPick2.image.medium);
          }
          
          if (randomPick3 && randomPick3.name && randomPick3.image.medium) {
            setRandomShow3(randomPick3.name);
            setShowImage3(randomPick3.image.medium);
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
    <div className='multi-display'>
    <Card style={{ width: '18rem' }} className='multi-display-frame'>
      <Card.Img variant="top" src={showImage} />
      <Card.Body>
        <Card.Title>{randomShow}</Card.Title>
        <Card.Text>

        </Card.Text>

      </Card.Body>
    </Card>
<br/>
    <Card style={{ width: '18rem' }} className='multi-display-frame'>
      <Card.Img variant="top" src={showImage2} />
      <Card.Body>
        <Card.Title>{randomShow2}</Card.Title>
        <Card.Text>
        </Card.Text>
      </Card.Body>
    </Card>
<br/>
<Card style={{ width: '18rem' }} className='multi-display-frame'>
      <Card.Img variant="top" src={showImage3} />
      <Card.Body>
        <Card.Title>{randomShow3}</Card.Title>
        <Card.Text>
        </Card.Text>
      </Card.Body>
    </Card>
    
    </div>
  );
};

export default ShowsDisplay;
