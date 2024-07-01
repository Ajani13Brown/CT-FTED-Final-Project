import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { addCustomer } from './Operations';

const CustomerForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        const customerData = {
            customer_name: name,
            email,
            phone
        };

        try {
            const response = await addCustomer(customerData);
            console.log('Customer added successfully:', response);
           
            setName('');
            setEmail('');
            setPhone('');
        } catch (error) {
            console.error('Error adding customer:', error);
            
        }
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                />
            </Form.Group>

            <Form.Group controlId="formEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />
            </Form.Group>

            <Form.Group controlId="formPhone">
                <Form.Label>Phone number</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter phone number"
                    value={phone}
                    onChange={(event) => setPhone(event.target.value)}
                />
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
};

export default CustomerForm;
