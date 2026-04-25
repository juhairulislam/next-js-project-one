'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLink = ({href, children}) => {

    const pathName = usePathname() ;

    return (
        <div>
            <Link href={href} className={`${pathName === href? 'text-purple-500' :''}`}>{children}</Link>
        </div>
    );
};

export default NavLink;