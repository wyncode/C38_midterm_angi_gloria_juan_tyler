import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

const AgeCheck = (props) => {
	const [ show, setShow ] = useState(true);
	const handleClose = () => setShow(false);
	return (
		<Modal
			style={{
				backgroundImage:
					'url("https://images.unsplash.com/photo-1589711428920-bf084b80e0bd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80")',
				backgroundRepeat: 'no-repeat',
				backgroundSize: 'cover'
			}}
			{...props}
			size="lg"
			aria-labelledby="contained-modal-title-vcenter"
			centered
			show={show}
			backdrop="static"
			onHide={handleClose}
		>
			<Modal.Header style={{ backgroundColor: '#FAD700' }}>
				<Modal.Title id="contained-modal-title-vcenter">ARE YOU OVER 21?!</Modal.Title>
			</Modal.Header>
			<Modal.Body style={{ backgroundColor: '#FAD700' }}>
				You have to be over 21 years old to access to our site
			</Modal.Body>
			<Modal.Footer style={{ backgroundColor: '#FAD700' }}>
				<Button variant="success" onClick={handleClose}>
					Yes, I am
				</Button>
				<Button variant="danger" onClick={handleClose}>
					<a
						style={{ textDecoration: 'none', color: 'white' }}
						href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
					>
						No, I am not
					</a>
				</Button>
			</Modal.Footer>
		</Modal>
	);
};

export default AgeCheck;
