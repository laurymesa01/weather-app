// eslint-disable-next-line no-unused-vars
import React from 'react'

const HourlyForecast = () => {
  return (
    <section className='p-4 bg-neutral-800 rounded-xl '>
        <div className='flex justify-between items-center'>
            <p className='text-preset-5 text-neutral-0'>Hourly Forecast</p>
            <div className='flex items-center gap-2 bg-neutral-600 p-2 rounded-md'>
                <p className='text-[16px] font-medium text-neutral-0'>Tuesday</p>
                <button className='cursor-pointer'>            
                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="8" fill="none" viewBox="0 0 13 8">
                        <path fill="#fff" d="M6.309 7.484 1.105 2.316c-.175-.14-.175-.421 0-.597l.704-.668a.405.405 0 0 1 .597 0l4.219 4.148 4.184-4.148c.175-.176.457-.176.597 0l.703.668c.176.176.176.457 0 .597L6.906 7.484a.405.405 0 0 1-.597 0Z"/>
                    </svg>
            </button>
            </div>
        </div>
        <ul className='flex flex-col gap-4 mt-4'>
            <li className='flex flex-row justify-between items-center p-3 bg-neutral-700 border border-neutral-600 rounded-md'>
                <p className='text-preset-5-medium text-neutral-0'>3 PM</p>
                <p className='text-preset-7 text-neutral-0'>20</p>
            </li>
            <li className='flex flex-row justify-between items-center p-3 bg-neutral-700 border border-neutral-600 rounded-md'>
                <p className='text-preset-5-medium text-neutral-0'>4 PM</p>
                <p className='text-preset-7 text-neutral-0'>20</p>
            </li>
            <li className='flex flex-row justify-between items-center p-3 bg-neutral-700 border border-neutral-600 rounded-md'>
                <p className='text-preset-5-medium text-neutral-0'>5 PM</p>
                <p className='text-preset-7 text-neutral-0'>20</p>
            </li>
            <li className='flex flex-row justify-between items-center p-3 bg-neutral-700 border border-neutral-600 rounded-md'>
                <p className='text-preset-5-medium text-neutral-0'>6 PM</p>
                <p className='text-preset-7 text-neutral-0'>19</p>
            </li>
            <li className='flex flex-row justify-between items-center p-3 bg-neutral-700 border border-neutral-600 rounded-md'>
                <p className='text-preset-5-medium text-neutral-0'>7 PM</p>
                <p className='text-preset-7 text-neutral-0'>18</p>
            </li>
            <li className='flex flex-row justify-between items-center p-3 bg-neutral-700 border border-neutral-600 rounded-md'>
                <p className='text-preset-5-medium text-neutral-0'>8 PM</p>
                <p className='text-preset-7 text-neutral-0'>18</p>
            </li>
            <li className='flex flex-row justify-between items-center p-3 bg-neutral-700 border border-neutral-600 rounded-md'>
                <p className='text-preset-5-medium text-neutral-0'>9 PM</p>
                <p className='text-preset-7 text-neutral-0'>17</p>
            </li>
            <li className='flex flex-row justify-between items-center p-3 bg-neutral-700 border border-neutral-600 rounded-md'>
                <p className='text-preset-5-medium text-neutral-0'>10 PM</p>
                <p className='text-preset-7 text-neutral-0'>17</p>
            </li>
        </ul>
    </section>
  )
}

export default HourlyForecast