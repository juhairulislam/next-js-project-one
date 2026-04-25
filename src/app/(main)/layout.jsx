import Header from '@/Components/Shared/Header';
import Navbar from '@/Components/Shared/Navbar';
import React from 'react';

const MainLayout = ({children}) => {
    return (
        <>
               <Header></Header>
        <Navbar></Navbar>
        {children}
        </>
    );
};

export default MainLayout;