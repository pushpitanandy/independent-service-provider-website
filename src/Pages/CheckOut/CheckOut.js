import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import ThankYou from './ThankYou';

const CheckOut = () => {

    const navigate = useNavigate();

    const handleCheckOut = () => {
        navigate('/thankyou');
    }

    return (
        <div className='container w-50 mx-auto'>
            <h2 className='text-success text-center mt-2'>Please Checkout and book your service</h2>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your name" required />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="text" placeholder="Phone Number" required />
                </Form.Group>

                <Button onClick={handleCheckOut} variant="success" type="submit">
                    CheckOut
                </Button>
            </Form>
        </div>
    );
};

export default CheckOut;