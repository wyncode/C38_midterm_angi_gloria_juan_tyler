import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
// import './App.css';

const Feature = () => {
  // const [ , ] = useState()

  return (
    <div className="container d-flex flex-column justify-content-center align-items-center">
      <Card style={{ width: '18rem' }}>
        <Card.Img
          variant="top"
          src="https://thefullpint.com/wp-content/uploads/J-Wakefield-Taproom.jpg"
        />
        <Card.Body id="cardbody">
          <Card.Title>Wynwood Brewery</Card.Title>
          <Card.Text>
            Talk of the town, artsy neighborhood of Wynwood proudly
          </Card.Text>
          <Button variant="primary">Website</Button>
        </Card.Body>
      </Card>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Feature;
