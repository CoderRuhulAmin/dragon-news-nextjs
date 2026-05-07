import Link from 'next/link';
import React from 'react';
import RegisterForm from '../components/RegisterForm';

const RegisterPage = () => {
    return (
        <section className="py-12 w-full">
                    <div className='container mx-auto flex justify-center items-center'>
                        <RegisterForm />
                    </div>
                </section>
    );
};

export default RegisterPage;