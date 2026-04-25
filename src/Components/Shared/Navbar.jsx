import Link from 'next/link';
import React from 'react';
import avatar from '@/assets/user.png'
import Image from 'next/image';

const Navbar = () => {
    return (
        <div className='flex justify-between w-[85%] mx-auto py-4 mt-6'>
            <div></div>
            <ul className='flex gap-4 text-gray-700'>
                <li><Link href={'/'}>Home </Link></li>
                <li><Link href={'/about'}>About</Link></li>
                <li><Link href={'/career'}>Career</Link></li>
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