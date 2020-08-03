if (process.env.NODE_ENV !== 'production') {
	require('dotenv').config();
}

const axios = require('axios');
const express = require('express');
const path = require('path');
const app = express();

app.get('/beer', async (request, response) => {
	try {
		const resp = await axios.get('https://api.openbrewerydb.org/breweries', {
			headers: { accept: 'application/json' }
		});
		response.send(resp);
	} catch (e) {
		console.log(e);
		response.status(500).send({ error: e.message });
	}
});

if (process.env.NODE_ENV === 'production') {
	// Serve any static files
	app.use(express.static(path.join(__dirname, 'client/build')));
	// Handle React routing, return all requests to React app
	app.get('*', (request, response) => {
		response.sendFile(path.join(__dirname, 'client/build', 'index.html'));
	});
}

const port = process.env.PORT || 8080;
app.listen(port, () => {
	console.log(`API listening on port ${port}...`);
});
