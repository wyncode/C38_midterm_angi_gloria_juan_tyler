import React from 'react';
import TeamMember from './TeamMember';
import '../About/About.css';
import Logo from './../../../src/Images/logo-color.png';
import angi from './ImagesPhotos/ANGI.jpg';
import juan from './ImagesPhotos/Juan.jpg';
import gloria from './ImagesPhotos/gloriaBeer.jpg';
import ty from './ImagesPhotos/ty.png';

const About = () => {
  return (
    <main className="container">
      <img className="logo-icon" src={Logo} alt="Brewery Finder Logo" />
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
