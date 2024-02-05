'use client'
import Image from 'next/image';
import Link from "next/link";
import { Libre_Baskerville } from 'next/font/google';
import { useState } from 'react';
import Header from '../header';
import DatePicker from "react-multi-date-picker"
import { Calendar } from "react-multi-date-picker"



type ValuePiece = Date | null;

type Value = ValuePiece | any[];


export default function MakeEvent() {
  const [value, setValue] = useState<any[]>([]);
  const [eventName, setEventName] = useState()
  const [dayType, setDayType] = useState<String>('day of week')
  const [dayOfWeek, setDayOfWeek] = useState<string[]>([])

  const handleDayOfWeek = (e: any) => {
    if(!dayOfWeek.includes(e.target.name)) {
      setDayOfWeek(
        [...dayOfWeek, e.target.name]
      )
    }
    else if(dayOfWeek.includes(e.target.name)) {
      setDayOfWeek(dayOfWeek.filter(day => day != e.target.name))
    }

    console.log(dayOfWeek)
    console.log(e.target.name)
  }

  const handleEventChange = (e: any) => {
    console.log(e.target.value)
    setEventName(e.target.value);
  }

  const handleDayChange = (e: any) => {
    console.log(e.target.name)
    if(e.target.name == "Dates") {
      console.log('dates')
      setDayType('dates')
    }
    else if(e.target.name == "Days of Week") {
      console.log('days of week')
      setDayType('day of week')
    }
  }

  const handleChange = (e:any) => {
    for(let i of e) {

      setValue([
        ...value, i.format()
      ])
    }

    
  }

  const handleCreateEvent = () => {
    console.log(dayType)
    let i;
    if(dayType == 'day of week') {
      i = dayOfWeek
    }
    else if(dayType == 'dates') {
      i = value
    }

    let data = {
      eventName: eventName,
      days: i,
    }

    console.log(data)
  }


  return (
    <div className="flex flex-col align-middle justify-center">
      <Header />
      <div className="flex flex-col bg-grey align-middle justify-center">
        <div className='flex flex-col py-12 px-96 text-center'>
          <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Event name</label>
          <input onChange={handleEventChange} type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
        </div>

        <div className="inline-flex justify-center  shadow-sm text-center" role="group">
          <button name='Dates' onClick={handleDayChange} type="button" className="px-4 py-2 rounded-sm text-sm font-medium text-gray-900 bg-white border border-gray-200  hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
            Dates
          </button>
          <button name='Days of Week' onClick={handleDayChange} type="button" className="px-4 py-2 rounded-sm text-sm font-medium text-gray-900 bg-white border-t border-b  border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
            Days of Week
          </button>
        </div>


      </div>
      <div className='flex justify-center'> 
        {dayType == 'day of week'? 
          <div className='flex justify-center'>
          {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, index) => (
            <button name={day} onClick={handleDayOfWeek} key={index} className={`btn ${dayOfWeek.includes(day) ? 'bg-blue-400':'bg-blue-600'}  border p-2 `}>
              {day}
            </button>
          ))}
          </div>
          :
          <Calendar 
          className=' text-black'
          multiple
          onChange={handleChange}
          /> 
          

        }

      </div>
      <button className=' self-center w-20 bg-blue-500' onClick={handleCreateEvent}>
        Create Event
      </button>

        

    </div>
  )
}
