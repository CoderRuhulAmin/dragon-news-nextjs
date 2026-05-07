"use client";
import { authClient } from '@/lib/auth-client';
import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const RightSidebar = () => {

    const handleGoogleSignIn = async () => {
        const data = await authClient.signIn.social({
            provider: "google",
        });
        console.log("Google Signin Data: ", data);
    }
    const handleGitHubSignIn = async () => {
        const data = await authClient.signIn.social({
            provider: "github"
        })
    }


    return (
        <div className='flex flex-col gap-2 my-4 px-4 py-2'>
            <button className='btn border-blue-500 text-blue-500' onClick={handleGoogleSignIn}>
                <FaGoogle /> Login with Google
            </button>
            <button className='btn' onClick={handleGitHubSignIn}>
                <FaGithub /> Login with GitHub
            </button>
        </div>
    );
};

export default RightSidebar;