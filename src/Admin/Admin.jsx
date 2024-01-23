import React from 'react';
import Navbar from '../components/Header/Navbar';
import Footer from '../components/Footer/Footer';
import { Outlet } from 'react-router-dom';

const Admin = () => {
    return (
        <div>
            <Navbar/>
            <div className="min-h-[calc(100vh-256px)]">

            <Outlet/>
            </div>
            <Footer/>
        </div>
    );
};

export default Admin;