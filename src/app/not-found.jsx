import Link from 'next/link';
import React from 'react';

const NotFoundPage = () => {
    return (
        <div className='h-[80vh] text-center p-20 space-y-5'>
            <h1 className='font-bold text-7xl text-purple-200'>404</h1>
            <p className='font-semibold text-4xl text-gray-500'>This page is not found</p>


            <Link href={'/'} className='btn btn-neutral mt-10'>Back to home</Link>
        </div>
    );
};

export default NotFoundPage;