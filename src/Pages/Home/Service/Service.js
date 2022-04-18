import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {

    const { name, image, description, price } = service;

    return (
        <div>
            <Card style={{ width: '18rem', height: '550px', padding: '10px', borderRadius: '10px' }}>
                <Card.Img variant="top" src={image} height="200px" />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                    <Card.Text>Price: ${price}</Card.Text>
                    <Link to="/checkout">
                        <Button variant="success" className='px-5'>Book The Service</Button>
                    </Link>
                </Card.Body>
            </Card>
        </div >
    );
};

export default Service;