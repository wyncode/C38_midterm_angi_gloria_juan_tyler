import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../Footer/Footer.css'

const Footer = () => {
    return (
<footer className="footer">
            <h3>JOIN OUR MAILING LIST</h3>
            <p>A perfectly brewed life for you? We second that! Subscribe below and grab your future by the mug.</p>
        <Form className="footer-form">

            <div className="inputs">
        <Form.Group controlId="formBasicName" className="input-box" >
            <Form.Control type="name" placeholder="Enter your Name" />
        </Form.Group>

        <Form.Group controlId="formBasicEmail" className="input-box" >
            <Form.Control type="email" placeholder="Enter your Email" />
        </Form.Group>
        </div>
        <div className="submit-agreement">
        <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Sign me up" />
            <Form.Text className="text-muted">
            We'll never share your email with anyone else.
            </Form.Text>
        </Form.Group>
        
        <Button variant="primary" type="submit" className="submit_button">
            Submit
        </Button>
        </div>
        <div className="social-media-icons">
            <ul>
                <li><a href="https://www.facebook.com/" target="_blank"><i class="fab fa-facebook-square"></i></a></li>
                <li><a href="https://www.instagram.com/" target="_blank"><i class="fab fa-instagram-square"></i></a></li>
                <li><a href="https://twitter.com/" target="_blank"><i class="fab fa-twitter-square"></i></a></li>
            </ul>
        </div>
        </Form>
</footer>
    )
}

export default Footer;

