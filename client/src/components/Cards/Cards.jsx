import React from 'react';
import './Cards.css';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Cards = (props) => (
	<div className="card-container">
		<img src={props.pic} alt="breweries" />
		<h2> {props.brewery.name} </h2>
		<p> City: {props.brewery.city} </p>
		<p> State: {props.brewery.state} </p>
		<p> Type: {props.brewery.brewery_type} </p>
		<Button
			href={props.brewery.website_url}
			target="_blank"
			rel="noopener noreferrer"
			className="button"
			variant="outline-dark"
		>
			Visit our website
		</Button>
		<Button className="button" variant="outline-dark">
			<Link to={`/maps/${props.brewery.id}`}>Visit us </Link>
		</Button>
	</div>
);

export default Cards;
