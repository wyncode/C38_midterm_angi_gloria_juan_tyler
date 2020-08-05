import React from 'react';
import TeamMember from './TeamMember';
import '../About/About.css';
import Logo from './../../../src/Images/logo-color.png';
import angi from './ImagesPhotos/ANGI.jpg';
import juan from './ImagesPhotos/Juan.jpg';
import gloria from './ImagesPhotos/gloriaBeer.jpg';

const About = () => {

    return (
        <main className="container">
            <img className="logo-icon"
                src={Logo}
                alt="Brewery Finder Logo"/>
            <h1>The Team</h1>
            <p>
                The miller light beyond an Ellis Island IPA throws some Amarillo Pale
                        Ale at an Imperial Stout around an air hocky table, or a change for a
                        bar tab trades baseball cards with the Amarillo Pale Ale inside a beer.
            </p>
            <div className="Allteamcards">
                <TeamMember name="Angi 'Swift Phalanges'" body="Enjoys long coding days with Corona and lime in hand"
                    img={angi}/>
                <TeamMember name="Juan the Nodemon" body="Loves a tall glass of La Rubia with his code"
                    img={juan}/>
                <TeamMember name="Gloria Tells a Storia" body="Likes to be not only a 'Modelo' drinker, but coder"
                    img={gloria}/>
                <TeamMember name="My name 2" body="Description of person 2 here" img="Hello1"/>
            </div>
        </main>
    );
};

export default About;
