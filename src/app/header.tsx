import Image from 'next/image';
import Link from "next/link";
import { Libre_Baskerville } from 'next/font/google';
import { libreBaskerville } from './font';

export default function Header() {
    return (
        <header className=' flex justify-between w-full first-letterborder-amber-500	px-32'>
            <Image
            src="/synply-logo.png"
            width={80}
            height={50}
            className="hidden md:block"
            alt="Screenshots of the dashboard project showing desktop version"
            style={{borderRadius: "100px"}}
            
            />
            <nav>
                <div className="w-full h-20 sticky top-0">
                    <div className="container mx-auto px-4 h-full">
                    <div className="flex justify-between items-center h-full">
                        <ul className="hidden md:flex gap-x-6 text-white">
                        <li className={`${libreBaskerville.className} antialiased font-bold text-3xl	`}>
                            <Link href="http://localhost:3000/api/add-pet?petName=aluffy&ownerName=vohn">
                            <p>About</p>
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