import React, { useState, useEffect } from 'react';
import { getAllCustomers } from './Operations';

const CustomersList = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const data = await getAllCustomers();
        console.log(data);
        setCustomers(data);
      } catch (error) {
        console.error('Error fetching customers:', error);
      }
    };

    fetchCustomers();
  }, []);

  return (
    <div>
      <h2>Customer List</h2>
      <ul>
        {customers.map(customer => (
          <li key={customer.id}>
            <strong>Name:</strong> {customer.customer_name} <br />
            <strong>Email:</strong> {customer.email} <br />
            <strong>Phone:</strong> {customer.phone}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CustomersList;
