import React from 'react';
import { Prompt } from 'react-router-dom';

const AgeCheck = () => {
	return (
		<Prompt
			message={(location, action) => {
				if (action === 'POP') {
					console.log('Backing up...');
				}

				return location.pathname.startsWith('/breweries')
					? true
					: `Are you sure you want to go to ${location.pathname}?`;
			}}
		/>
	);
};

export default AgeCheck;
