/* eslint-disable no-unused-vars */
import React from 'react'

const DaysDropdown = () => {

    const days = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
    ];

  return (
    <div id="dropdown" className="z-10 w-44 absolute top-full right-0 mt-2">
        <div className="p-2 bg-neutral-800 border border-neutral-600 rounded-xl" aria-labelledby="dropdownDefaultButton">
          <ul className='flex flex-col gap-2'>   
            {days.map((day, index) => (
                <li key={index} className='focus-within:bg-neutral-700 rounded-md p-1.5'>
                    <button className="text-preset-7 text-neutral-0 w-full text-start cursor-pointer">{day}</button>
                </li>
            ))}       
          </ul>

        </div>
    </div>
  )
}

export default DaysDropdown