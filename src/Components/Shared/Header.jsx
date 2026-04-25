import React from 'react';
import logo from '@/assets/logo.png'
import Image from 'next/image';
import { compareAsc, format } from "date-fns";


const Header = () => {
    return (
        <div className='text-center p-8 space-y-2'>
            <Image
            alt='Logo'
            width={300}
            height='auto'
            src={logo}
            loading="eager"
            className='mx-auto'
            ></Image>

            <p>Journalism Without Fear or Favour</p>
            <p>{format(new Date(), "EEEE, MMM dd , yyyy")}</p>

        </div>
    );
};

export default Header;