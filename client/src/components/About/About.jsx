import React from 'react';
import { Card } from 'react-bootstrap';
import TeamMember from './TeamMember';
import '../About/About.css';
import angi from './ImagesPhotos/ANGI.jpg';
import juan from './ImagesPhotos/Juan.jpg';
import gloria from './ImagesPhotos/gloriaBeer.jpg';

const About = () => {
  //   const TeamMember = (props) => {
  //     return (
  //       <Card style={{ width: '45rem' }}>
  //         <Card.Img variant="top" src="" />
  //         <Card.Body id="aboutbody">
  //           <Card.Title>{props.name}</Card.Title>
  //           <Card.Text>{props.body}</Card.Text>
  //         </Card.Body>
  //       </Card>
  //     );
  //   };
  return (
    <main className="container">
      <h1>The Team</h1>
      <p>
        Industrious and in the pursuit of transformative tech, the Team knows
        very well how important taking breaks is to achieving success! Here are
        the members who bring you
      </p>
      <div className="Allteamcards">
        <TeamMember
          name="Angi 'Swift Phalanges'"
          body="Enjoys long coding days with Corona and lime in hand"
          img={angi}
        />
        <TeamMember
          name="Juan the Nodemon"
          body="Loves a tall glass of La Rubia with his code"
          img={juan}
        />
        <TeamMember
          name="Gloria Tells a Storia"
          body="Likes to be not only a 'Modelo' drinker, but coder"
          img={gloria}
        />
        <TeamMember
          name="My name 2"
          body="Description of person 2 here"
          img="Hello1"
        />
      </div>
    </main>
  );
};

export default About;
