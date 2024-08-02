import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';

//(React hooks) - States helps to use functions outside the 'main' function.
const ActorsDisplay = () => {
  const [randomName, setRandomName] = useState('');
  const [personAvatar, setPersonAvatar] = useState('');
  const [randomName2, setRandomName2] = useState('');
  const [personAvatar2, setPersonAvatar2] = useState('');
  const [randomName3, setRandomName3] = useState('');
  const [personAvatar3, setPersonAvatar3] = useState('');


  useEffect(() => {
    const getRandomName = async () => {
      try {

        // Fetch the list of people
        const response = await fetch('https://api.tvmaze.com/people');
        const data = await response.json();
    
        // Choose a random person from the list
        const randomPick = data[Math.floor(Math.random() * data.length)];
        const randomPick2 = data[Math.floor(Math.random() * data.length)];
        const randomPick3 = data[Math.floor(Math.random() * data.length)];
    
        // Use and set the selected person's name, avatar (picture/image)
        if (randomPick && randomPick.name) {
          setRandomName(randomPick.name);
          setPersonAvatar(randomPick.image?.medium || ''); // Keeps the actors "frame" if does not have a picture
        }
    
        if (randomPick2 && randomPick2.name) {
          setRandomName2(randomPick2.name);
          setPersonAvatar2(randomPick2.image?.medium || ''); 
        }
    
        if (randomPick3 && randomPick3.name) {
          setRandomName3(randomPick3.name);
          setPersonAvatar3(randomPick3.image?.medium || ''); 
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
      <Card.Img variant="top" src={personAvatar} />
      <Card.Body>
        <Card.Title>{randomName}</Card.Title>
        <Card.Text>

        </Card.Text>

      </Card.Body>
    </Card>
<br/>
    <Card style={{ width: '18rem' }} className='multi-display-frame'>
      <Card.Img variant="top" src={personAvatar2} />
      <Card.Body>
        <Card.Title>{randomName2}</Card.Title>
        <Card.Text>
        </Card.Text>
      </Card.Body>
    </Card>
<br/>
<Card style={{ width: '18rem' }} className='multi-display-frame'>
      <Card.Img variant="top" src={personAvatar3} />
      <Card.Body>
        <Card.Title>{randomName3}</Card.Title>
        <Card.Text>
        </Card.Text>
      </Card.Body>
    </Card>
    
    </div>
  );
};

export default ActorsDisplay;
