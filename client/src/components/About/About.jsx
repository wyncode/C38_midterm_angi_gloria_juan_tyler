import React from 'react'
import "../About/About.css"
import Logo from './../../../src/Images/logo-color.png'

const About = () => {
    return (
        <main className="container">
            <img className="logo-icon" src={Logo} alt="Brewery Finder Logo" />
            <h1>The Team</h1>
            <p>The miller light beyond an Ellis Island IPA throws some Amarillo Pale Ale at an Imperial Stout around an air hocky table, or a change for a bar tab trades baseball cards with the Amarillo Pale Ale inside a beer.</p>
            <div>Team Cards Go Here</div>
        </main>
    )
}

export default About;