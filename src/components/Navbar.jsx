"use client"
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import userAvatar from '@/assets/user.png';
import NavLink from './NavLink';
import { authClient } from '@/lib/auth-client';

const Navbar = () => {

    const { data: session, isPending } = authClient.useSession();
    // console.log("Session Data: ", session);
    const user = session?.user;
    console.log("Session User: ", user);

    const links = <>
        <li><NavLink href={'/'} className={`bg-purple-300 hover:bg-purple-200`}>Home</NavLink></li>
        <li><NavLink href={'/about'} className={`bg-purple-300 hover:bg-purple-200`}>About</NavLink></li>
        <li><NavLink href={'/career'} className={`bg-purple-300 hover:bg-purple-200`}>Career</NavLink></li>
    </>

    return (
        <div className='shadow-sm'>
            <div className='container mx-auto'>
                <nav className="navbar ">
                    <div className="navbar-start">

                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 gap-2">
                            {links}
                        </ul>
                    </div>
                    {
                        isPending ? "Loading..."
                        : user ?
                            <div className="navbar-end space-x-2">
                                <h2>Hello, <strong>{user?.name}</strong></h2>
                                <Image src={user?.image || userAvatar} width={40} height={40} alt='user' />
                                <button 
                                    className='btn bg-purple-500 text-base-100'
                                    onClick={async () => authClient.signOut()}
                                >
                                    <Link href={'/login'}>Logout</Link>
                                </button>
                            </div>

                        :   <div className="navbar-end space-x-2">
                                <Image src={user?.image || userAvatar} width={40} height={40} alt='user' />
                                <button className='btn bg-purple-500 text-base-100'>
                                    <Link href={'/login'}>Login</Link>
                                </button>
                            </div>
                    }
                </nav>
            </div>
        </div>
    );
};

export default Navbar;