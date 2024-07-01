import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { updateCustomer } from './Operations'; // Import updateCustomer function

const UpdateCustomer = () => {
  const [customerId, setCustomerId] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    const customerData = {
      customer_name: name,
      email,
      phone
    };

    try {
      const response = await updateCustomer(customerId, customerData);
      console.log(`Customer with ID ${customerId} updated successfully:`, response);
      // Optionally, handle success response (e.g., show success message)
      // Reset form fields after successful submission
      setCustomerId('');
      setName('');
      setEmail('');
      setPhone('');
    } catch (error) {
      console.error(`Error updating customer with ID ${customerId}:`, error);
      // Optionally, handle error (e.g., show error message)
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formCustomerId">
        <Form.Label>Customer ID</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Customer ID"
          value={customerId}
          onChange={(event) => setCustomerId(event.target.value)}
        />
      </Form.Group>

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
        Update Customer
      </Button>
    </Form>
  );
};

export default UpdateCustomer;