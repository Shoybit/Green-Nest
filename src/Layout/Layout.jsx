import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar';
import { ToastContainer } from 'react-toastify';

const Layout = () => {
    return (
        <div>
            <ToastContainer></ToastContainer>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Layout;