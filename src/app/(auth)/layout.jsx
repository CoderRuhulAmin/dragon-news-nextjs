import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import React from 'react';
import { montserrat } from '../layout';

const AuthLayout = ({ children }) => {
    return (
        <div className={`${montserrat.className}`}>
            <Navbar />

            <main className=' w-full bg-gray-100 flex justify-center items-center h-screen'>
                {children}
            </main>

            <Footer />
        </div>
    );
};

export default AuthLayout;