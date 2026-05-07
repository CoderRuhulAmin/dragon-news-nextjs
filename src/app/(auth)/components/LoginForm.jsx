"use client"
import RightSidebar from '@/app/(main)/components/RightSidebar';
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const LoginForm = () => {

    const [isShowPassword, setIsShowPassword] = useState(false);

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const handleLoginForm = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
    }
    const handleLoginForm2 = async (user) => {
        console.log(user);

        const { email, password } = user;

        const { data, error } = await authClient.signIn.email({
            email: email, // required
            password: password, // required
            rememberMe: true,
            callbackURL: "/",
        });

        console.log("User: ", data);
        console.log("Error: ", error);

        if (error) {
            alert(error.message);
        }
        if (data) {
            alert("Login successful");
        }
    }
    // console.log("Errors: ", errors);
    // console.log(watch("email"));
    // console.log(watch("password"));

    return (
        <div className="card w-8/12 bg-base-100 shadow-sm rounded-xl p-5">
            <div className="flex justify-center items-center">
                <h2 className='card-title'>Login your account</h2>
            </div>
            <div className="card-body">
                <form onSubmit={handleSubmit(handleLoginForm2)} className='space-y-3'>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Email: </legend>
                        <input
                            type="email"
                            name='email'
                            {...register("email", { required: true })}
                            className="input w-full"
                            placeholder="Enter your email id"
                        />
                        {errors.email && <span className='text-red-500'>This field is required</span>}
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Password: </legend>
                        <div className='flex items-center relative'>
                            <input
                                type={isShowPassword ? "text" : "password"}
                                name='password'
                                {...register("password", { required: "Password is Required" })}
                                className="input w-full"
                                placeholder="Enter your password"
                            />
                            <button
                                type="button"
                                onClick={() => setIsShowPassword(!isShowPassword)}
                                className="btn btn-neutral rounded-0 rounded-end-md absolute top-0 right-0"
                            >
                                {isShowPassword ? <FaEye /> : <FaEyeSlash />}
                            </button>
                        </div>
                        {errors.password && <span className='text-red-500'>{errors.password.message}</span>}
                    </fieldset>
                    <button className='btn w-full bg-slate-800 text-white'>
                        Login
                    </button>
                </form>
                <p className='mt-4'>
                    Don't have an account?{" "}
                    <Link href={"/register"} className='text-blue-500 font-semibold'>
                        Register
                    </Link>
                </p>
                <RightSidebar />
            </div>
        </div>
    );
};

export default LoginForm;