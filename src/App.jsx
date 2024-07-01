import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Router, Routes } from 'react-router-dom'
import { getAllCustomers, getCustomerById } from './components/Customer/Operations'
import CustomersList from './components/Customer/CustomerList'
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomerID from './components/Customer/CustomerID'
import CustomerForm from './components/Customer/CustomerForm'
import DeleteCustomer from './components/Customer/DeleteCustomer'
import UpdateCustomer from './components/Customer/UpdateCustomer'






export const API_URL = 'http://localhost:5000';

function App() {
  return (
    <>
      <Routes>
        < Route path="EditCustomer" element={<UpdateCustomer />} />
        <Route path="DeleteCustomer" element={< DeleteCustomer />} />
        <Route path="/Customers" element={< CustomersList />} />
        <Route path="/CustomerForm" element={< CustomerForm />} />
        <Route path="/Customers/:id" element={< CustomerID />} />
      
      </Routes>
    </>
  );
}

export default App
