"use client"

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Link from "next/link";
import { Libre_Baskerville } from 'next/font/google';
import { libreBaskerville } from './font';

export default function Main() {
    const router = useRouter();
    const handleClick = (e: any) => {
        e.preventDefault();
        router.push('/make-event');
    }

    return (
        <main className=" flex flex-col items-center py-5 bg-dark-purple">
            <h1 className={`${libreBaskerville.className} antialiased text-5xl text-center leading-loose`}>
                Simple way to coordinate the best time <br></br> for your group to meet
            </h1>
            <Image 
                src="/hero.png"
                width={500}
                height={100}
                className=' rounded-md'
                alt='hero image of main page'
            />
            <button onClick={handleClick} className="bg-blue-500 mt-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-1/12 h-24 text-2xl ">
                Get Started
            </button>
        </main>
    )
}