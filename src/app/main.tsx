import Image from 'next/image';
import Link from "next/link";
import { Libre_Baskerville } from 'next/font/google';
import { libreBaskerville } from './font';

export default function Main() {
    return (
        <main className=" flex flex-col items-center p-24">
            <h1 className={`${libreBaskerville.className} antialiased text-5xl text-center leading-loose`}>
                Simple way to coordinate the best time <br></br> for your group to meet
            </h1>
            <Image
            src="/hero.png">

            </Image>
        </main>
    )
}