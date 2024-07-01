import React, { useState, useEffect } from 'react';
import { getAllCustomers, deleteCustomer } from './Operations';
import { Button } from 'react-bootstrap'; // Import Button component from React Bootstrap

const DeleteCustomer = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const data = await getAllCustomers();
        setCustomers(data);
      } catch (error) {
        console.error('Error fetching customers:', error);
      }
    };

    fetchCustomers();
  }, []);

  const handleDeleteCustomer = async (id) => {
    try {
      await deleteCustomer(id);
      // Filter out the deleted customer from the state
      setCustomers(customers.filter(customer => customer.id !== id));
      console.log(`Customer with ID ${id} deleted successfully.`);
    } catch (error) {
      console.error(`Error deleting customer with ID ${id}:`, error);
    }
  };

  return (
    <div>
      <h2>Customer List</h2>
      <ul>
        {customers.map(customer => (
          <li key={customer.id}>
            <strong>Name:</strong> {customer.customer_name} <br />
            <strong>Email:</strong> {customer.email} <br />
            <strong>Phone:</strong> {customer.phone} <br />
            <Button variant="danger" onClick={() => handleDeleteCustomer(customer.id)}>Delete</Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DeleteCustomer;
