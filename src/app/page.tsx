import Image from 'next/image';
import Link from "next/link";
import { Libre_Baskerville } from 'next/font/google';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center p-14">
      <header className=' flex justify-between w-full border border-solid	border-amber-500	'>
        <Image
          src="/synply-logo.png"
          width={80}
          height={50}
          className="hidden md:block border border-stone-50	"
          alt="Screenshots of the dashboard project showing desktop version"
          style={{borderRadius: "100px"}}
          
        />
        <nav>
          <div className="w-full h-20 sticky top-0">
            <div className="container mx-auto px-4 h-full">
              <div className="flex justify-between items-center h-full">
                <ul className="hidden md:flex gap-x-6 text-white">
                  <li>
                    <Link href="/about">
                      <p className={'${Libre_Baskerville.class}'}>About</p>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}
