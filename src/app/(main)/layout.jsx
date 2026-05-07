import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import React from 'react';
import BreakingNews from './components/BreakingNews';

const MainLayout = ({ children }) => {
    return (
        <>
            <Header />
            <BreakingNews />
            <Navbar />

            {children}

            <Footer />
        </>
    );
};

export default MainLayout;