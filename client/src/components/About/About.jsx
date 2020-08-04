import React from 'react';
import { Card } from 'react-bootstrap';
import TeamMember from './TeamMember';
import '../About/About.css';
import angi from './ImagesPhotos/ANGI.jpg';

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
        The miller light beyond an Ellis Island IPA throws some Amarillo Pale
        Ale at an Imperial Stout around an air hocky table, or a change for a
        bar tab trades baseball cards with the Amarillo Pale Ale inside a beer.
      </p>
      <div>Team Cards Go Here</div>
      <TeamMember name="My name" body="Description of person here" img={angi} />
      <TeamMember
        name="My name 2"
        body="Description of person 2 here"
        img="Hello1"
      />
    </main>
  );
};

export default About;
