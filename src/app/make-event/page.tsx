'use client'
import Image from 'next/image';
import Link from "next/link";
import { Libre_Baskerville } from 'next/font/google';
import { useState } from 'react';
import Header from '../header';


export default function MakeEvent() {
  const [eventName, setEventName] = useState()
  const [dayType, setDayType] = useState<String>()

  const handleEventChange = (e: any) => {
    console.log(e.target.value)
    setEventName(e.target.value);
  }

  const handleDayChange = (e: any) => {
    if(e.target.value == "Dates") {
      setDayType('dates')
    }
    else if(e.target.value == "Days of Week") {
      setDayType('day of week')
    }
  }


  return (
    <div className="flex flex-col">
      <Header />
      <div className="flex flex-col bg-grey align-middle justify-center">
        <div className='flex flex-col py-12 px-96 text-center'>
          <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Event name</label>
          <input onChange={handleEventChange} type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
        </div>

        <div className="inline-flex justify-center  shadow-sm text-center" role="group">
          <button onClick={handleDayChange} type="button" className="px-4 py-2 rounded-sm text-sm font-medium text-gray-900 bg-white border border-gray-200  hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
            Dates
          </button>
          <button onClick={handleDayChange} type="button" className="px-4 py-2 rounded-sm text-sm font-medium text-gray-900 bg-white border-t border-b  border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
            Days of Week
          </button>
        </div>
        
      </div>


    </div>
  )
}
