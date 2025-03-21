import Link from "next/link";
import React from "react";
import { GraduationCap, LogIn} from "lucide-react";

import { Metadata } from 'next';
import Image from "next/image";
import SignInButton from "@/components/signin/signin-button";

export const metadata: Metadata = {
    title: 'MDA402 Project Management - Home',
    description: 'Home page'
};

const Home = () => {

    return (
        <main className="flex flex-col items-center justify-center w-screen h-[calc(100vh-100px)]">
            <div className="flex flex-col items-center justify-center">
                <div className="flex flex-col items-center justify-center p-10">
                    <h1 className="flex text-6xl items-center justify-center p-10 font-semibold text-[#01aa00]">
                        <Image src="/f1.png" alt="F1 logo" width={800} height={100} />
                    </h1>
                    <h1 className="flex flex-col gap-6">
                        <p className="text-2xl w-6xl text-center text-[#fefeff]">Welcome to the official page of F1 prediction application. You can join the competition just by signing in.</p>
                        <p className="text-2xl w-6xl text-center text-[#fefeff]">Let the fastest win!</p>
                    </h1>
                </div>
                <div className="flex flex-row items-center space-x-8">
                    <SignInButton 
                        url={`${process.env.NEXT_PUBLIC_URL!}/practices`}
                        className="bg-[#0101bf] border-2 border-[#0101bf] text-[#f3f2fe] text-center rounded-xl p-4 flex flex-row gap-2 transition duration-200 ease-in-out hover:bg-[#f3f2fe] hover:text-[#0101bf]"
                    >
                        <LogIn size={25}/>
                        Sign In
                    </SignInButton>
                    
                </div>
            </div>
        </main>
    );
}

export default Home