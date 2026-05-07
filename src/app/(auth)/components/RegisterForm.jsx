"use client"
import RightSidebar from '@/app/(main)/components/RightSidebar';
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const RegisterForm = () => {

    const [isShowPassword, setIsShowPassword] = useState(false);

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const handleRegisterForm = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
    }
    const handleRegisterForm2 = async (data) => {
        console.log(data);

        const { email, name, photo, password } = data;

        const { data: res, error } = await authClient.signUp.email({
            name: name, // required
            email: email, // required
            password: password, // required
            image: photo,
            callbackURL: "/",
        });

        console.log("Data Res: ", res);
        console.log("Data error: ", error);

        if (error) {
            alert(error.message);
        }
        if (res) {
            alert("Signup successful");
        }
    }
    // console.log("Errors: ", errors);
    // console.log(watch("name"));
    // console.log(watch("email"));
    // console.log(watch("password"));
    // console.log(watch("photo"));

    return (
        <div className="card w-8/12 bg-base-100 shadow-sm rounded-xl p-5">
            <div className="flex justify-center items-center">
                <h2 className='card-title'>Register an account</h2>
            </div>
            <div className="card-body">
                <form onSubmit={handleSubmit(handleRegisterForm2)} className='space-y-3'>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Full Name: </legend>
                        <input
                            type="text"
                            name='name'
                            {...register("name", { required: "Name is required" })}
                            className="input w-full"
                            placeholder="Enter your full name"
                        />
                        {errors.name && <span className='text-red-500'>{errors.name.message}</span>}
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Email: </legend>
                        <input
                            type="email"
                            name='email'
                            {...register("email", { required: 'Email is required' })}
                            className="input w-full"
                            placeholder="Enter your email id"
                        />
                        {errors.email && <span className='text-red-500'>{errors.email.message}</span>}
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
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Photo URL: </legend>
                        <input
                            type="text"
                            name='photo'
                            {...register("photo", { required: "Photo URL is required" })}
                            className="input w-full"
                            placeholder="Enter your photo url"
                        />
                        {errors.photo && <span className='text-red-500'>{errors.photo.message}</span>}
                    </fieldset>
                    <button className='btn w-full bg-slate-800 text-white'>
                        Register
                    </button>
                </form>
                <p className='mt-4'>
                    Have an account?{" "}
                    <Link href={"/login"} className='text-blue-500 font-semibold'>
                        Login
                    </Link>
                </p>
                <RightSidebar />
            </div>
        </div>
    );
};

export default RegisterForm;