import Image from 'next/image';
import Link from "next/link";
import { Libre_Baskerville } from 'next/font/google';
import { libreBaskerville } from './font';

export default function Header() {
    return (
        <header className=' flex justify-between align-middle w-full first-letterborder-amber-500 h-28 py-8 px-24 bg-off-white'>
            <Image
            src="/synply-logo.png"
            width={50}
            height={50}
            alt="Screenshots of the dashboard project showing desktop version"
            style={{borderRadius: "100px"}}
            />
            <nav>
                <div className="w-full h-20 sticky top-0">
                    <div className="container mx-auto h-full">
                        <div className="flex justify-between items-center">
                            <ul className="md:flex gap-x-6 text-dark-purple">
                                <li className={`${libreBaskerville.className} antialiased font-bold text-3xl	`}>
                                    <Link href="http://localhost:3000/api/add-pet?petName=aluffy&ownerName=vohn">
                                    <p className=' text-center'>About</p>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}