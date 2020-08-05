import React from 'react';
import { Card } from 'react-bootstrap';
import './About.css';

const TeamMember = (props) => {
	return (
		<Card className="teamCards">
			<Card.Img className="Ourimages" variant="top" src={props.img} />
			<Card.Body>
				<Card.Title>{props.name}</Card.Title>
				<Card.Text>{props.body}</Card.Text>
			</Card.Body>
		</Card>
	);
};

export default TeamMember;
