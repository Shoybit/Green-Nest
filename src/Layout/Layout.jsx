import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar';
import { ToastContainer } from 'react-toastify';
import Footer from '../Components/Footer';

const Layout = () => {
    return (
        <div>
            <ToastContainer></ToastContainer>
            <Navbar></Navbar>
            <div className='min-h-screen'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Layout;