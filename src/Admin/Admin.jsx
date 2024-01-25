import React from 'react';
import Navbar from '../components/Header/Navbar';
import Footer from '../components/Footer/Footer';
import { Outlet, useNavigation } from 'react-router-dom';


const Admin = () => {
    const navigation = useNavigation();
    return (
        <div>
            <Navbar/>
            <div className="min-h-[calc(100vh-100px)]">
            {
                navigation.state === 'loading' && <Spinner/>  
            }
            <Outlet/>
            </div>
            <Footer/>
        </div>
    );
};

export default Admin;