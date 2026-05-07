import Link from 'next/link';
import React from 'react';
import LoginForm from '../components/LoginForm';

const LoginPage = () => {
    return (
        <section className="py-12 w-full">
            <div className='container mx-auto flex justify-center items-center'>
                <LoginForm />
            </div>
        </section>
    );
};

export default LoginPage;