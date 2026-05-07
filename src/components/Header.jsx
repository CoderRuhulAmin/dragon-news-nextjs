import React from 'react';
import logo from '@/assets/logo.png';
import Image from 'next/image';
import { compareAsc, format } from "date-fns";

const Header = () => {

    return (
        <div className="container mx-auto">
            <div className='text-center space-y-2'>
                <Image src={logo} width={300} height={200} alt='Logo' className='mx-auto' />
                <p>Journalism without Fear or Favour.</p>
                <p>{format(new Date(), "EEEE, MMMM dd, yyyy")}</p>
            </div>
        </div>
    );
};

export default Header;