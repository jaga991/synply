import Image from 'next/image';
import Link from "next/link";
import { Libre_Baskerville } from 'next/font/google';
import { libreBaskerville } from './font';
import Header from './header';
import Main from './main';

export default function Home() {
  return (
    <div className="flex flex-col">
      <Header />
      <Main />
    </div>
  )
}
