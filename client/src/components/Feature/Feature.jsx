import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import '../Feature/Feature.css';

const Feature = () => {
	const [ email, setEmail ] = useState('');

	const subscribed = () => {
		const emailValid = email.search('@');
		if (emailValid !== -1) {
			alert('Thanks for subscribing!');
		}
	};

	return (
		<div className="container d-flex flex-column justify-content-center align-items-center">
			<Card style={{ width: '45rem' }}>
				<Card.Img
					className="FeatureImage"
					variant="top"
					href="https://wynwoodbrewing.com/"
					src="https://thefullpint.com/wp-content/uploads/J-Wakefield-Taproom.jpg"
				/>
				<Card.Body id="cardbody">
					<Card.Title>Talk of the Town</Card.Title>
					<Card.Text>
						<h3>Wynwood Brewery</h3> Nothing quenches the thirst for fun in the artsy town of Wynwood like
						its pride and joy distillery, Wynwood Brewery. Need a taste? WB delights their patrons with
						popular crafts like La Rubia and Laces IPA, so go grab your fill.
					</Card.Text>


					<Button id="websitebutton" variant="primary" href="https://wynwoodbrewing.com/" target="_blank">
						Website
					</Button>
				</Card.Body>
			</Card>
		</div>
	);
};

export default Feature;
