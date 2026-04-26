import { newsDetailsById } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const DetailsPage =async ({params}) => {

    const {id} = await params ;

    // console.log(id)

    const newsDetails =await newsDetailsById(id) ;

    console.log(newsDetails, "news Details")

    return (
        <div className='w-[85%] mx-auto p-4'>

            <h1 className='font-bold text-xl'>{newsDetails.title}</h1>

         

            <p className='my-4 text-slate-500 text-[16px]'>{newsDetails.details}</p>
            
            <Link href={`/category/${newsDetails.category_id}`} className='btn bg-purple-500 text-white'>See Other News For This Category</Link>
        </div>
    );
};

export default DetailsPage;