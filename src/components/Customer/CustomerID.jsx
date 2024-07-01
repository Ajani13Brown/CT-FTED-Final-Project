import React, { useEffect, useState } from 'react';
import { getCustomerById } from './Operations';
import { useParams } from 'react-router-dom';

const CustomerID = () => {
    const { id } = useParams();
    const [customer, setCustomer] = useState(null);

    useEffect(() => {
        const fetchCustomer = async () => {
            try {
                const data = await getCustomerById(id);
                setCustomer(data);
            } catch (error) {
                console.error('Error fetching customer:', error);
            }
        };

        fetchCustomer();
    }, [id]);

    if (!customer) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>Customer Details</h2>
            <ul>
                <li>
                    <strong>Name:</strong> {customer.customer_name} <br />
                    <strong>Email:</strong> {customer.email} <br />
                    <strong>Phone:</strong> {customer.phone}
                </li>
            </ul>
        </div>
    );
};

export default CustomerID;
