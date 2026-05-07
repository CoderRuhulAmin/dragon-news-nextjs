"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLink = ({ href, className, children}) => {
    const pathname = usePathname();
    console.log("PathName: ", pathname);

    const isActive = href === pathname;

    return (
        <Link 
            href={href} 
            className={`${isActive ? "border-b-2 border-purple-600" : ""} ${className}`}
        >
            {children}
        </Link>
    );
};

export default NavLink;