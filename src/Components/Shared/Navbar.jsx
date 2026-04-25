import Link from 'next/link';
import React from 'react';
import avatar from '@/assets/user.png'
import Image from 'next/image';
import NavLink from '../../../NavLink';

const Navbar = () => {
    return (
        <div className='flex justify-between w-[85%] mx-auto py-4 mt-6'>
            <div></div>
            <ul className='flex gap-4 text-gray-700'>
                <li><NavLink href={'/'}>Home </NavLink></li>
                <li><NavLink href={'/about'}>About</NavLink></li>
                <li><NavLink href={'/career'}>Career</NavLink></li>
            </ul>

            <div className='flex gap-4 items-center'>

                <Image
                alt='Navbar avater'
                width={50}
                height={50}
                src={avatar}

                >

                </Image>
                <Link href={'/login'} className='btn btn-neutral'>LogIn</Link>

            </div>
        </div>
    );
};

export default Navbar;