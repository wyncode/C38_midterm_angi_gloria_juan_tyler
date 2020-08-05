import React from 'react';
import { Card } from 'react-bootstrap';
import TeamMember from './TeamMember';
import '../About/About.css';
import angi from './ImagesPhotos/ANGI.jpg';
import juan from './ImagesPhotos/Juan.jpg';
import gloria from './ImagesPhotos/gloriaBeer.jpg';
import ty from './ImagesPhotos/image0.jpeg';

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
        the members who bring you the exhilerating component of Brewery Finder!
      </p>

      <div className="Allteamcards">
        <TeamMember
          name="Angi 'Swift Phalanges'"
          body="Enjoys long coding days with Lulo Sour in hand."
          img={angi}
        />

        <TeamMember
          name="Juan the Nodemon"
          body="Prefers blondes, so La Rubia is by his coding side."
          img={juan}
        />
        <TeamMember
          name="Gloria Tells a Storia"
          body="Likes to be not only a 'Modelo' drinker, but modelo coder too."
          img={gloria}
        />
        <TeamMember
          name="Ty the Full Stack Guy"
          body="Heine-win! Takes big sips of the latest and greatest in the tech world."
          img={ty}
        />
      </div>
    </main>
  );
};

export default About;
