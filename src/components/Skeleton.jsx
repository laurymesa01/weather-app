/* eslint-disable no-unused-vars */
import React from 'react'

const Skeleton = () => {

    const weatherConditions = ["Feels like", "Humidity", "Wind", "Precipitation"];
  return (
    <section className='flex flex-col  gap-4 py-4 xl:flex-row animate-pulse'>
        <section className='flex flex-col gap-8 xl:w-2/3'>
            <div className='h-70 rounded-xl bg-neutral-700 flex flex-col justify-center items-center'>
                <p className='text-preset-6 text-neutral-200 text-center'>Loading...</p>
            </div>
            <ul className='grid grid-cols-2 md:grid-cols-4 gap-4'>
                    {weatherConditions.map((condition, index) => (
                        <li key={index} className='bg-neutral-700 rounded-xl p-4 border border-neutral-600 mb-4'>
                            <p className='text-preset-6 text-neutral-200'>{condition}</p>
                            <p className='text-preset-3 text-neutral-0 mt-3'>--</p>
                        </li>
                    ))}
            </ul>
            <div>
                <p className='text-preset-5 text-neutral-0'>Daily forecast</p>
                <ul className='grid grid-cols-3 md:grid-cols-7 gap-4 mt-4'>
                    <li className='bg-neutral-800 h-40 p-2 rounded-xl border border-neutral-600 '></li>
                    <li className='bg-neutral-800 h-40 p-2 rounded-xl border border-neutral-600'></li>
                    <li className='bg-neutral-800 h-40 p-2 rounded-xl border border-neutral-600'></li>
                    <li className='bg-neutral-800 h-40 p-2 rounded-xl border border-neutral-600'></li>
                    <li className='bg-neutral-800 h-40 p-2 rounded-xl border border-neutral-600'></li>
                    <li className='bg-neutral-800 h-40 p-2 rounded-xl border border-neutral-600'></li>
                    <li className='bg-neutral-800 h-40 p-2 rounded-xl border border-neutral-600'></li>
                </ul>
            </div>
        </section>
        <section className='xl:flex-1 bg-neutral-800 rounded-xl p-4 animate-pulse'>
            <div className='flex justify-between items-center'>
                <p className='text-preset-5 text-neutral-0'>Hourly forecast</p>
                <div className='flex items-center gap-2 bg-neutral-600 p-2 rounded-md'>
                    <p className=' text-neutral-0'>-</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="6" fill="none" viewBox="0 0 13 8"><path fill="#fff" d="M6.309 7.484 1.105 2.316c-.175-.14-.175-.421 0-.597l.704-.668a.405.405 0 0 1 .597 0l4.219 4.148 4.184-4.148c.175-.176.457-.176.597 0l.703.668c.176.176.176.457 0 .597L6.906 7.484a.405.405 0 0 1-.597 0Z"/></svg>
                </div>
            </div>
            <ul className='flex flex-col gap-4 mt-4'>
                <li className='bg-neutral-700 h-12 border border-neutral-600 rounded-md'></li>
                <li className='bg-neutral-700 h-12 border border-neutral-600 rounded-md'></li>
                <li className='bg-neutral-700 h-12 border border-neutral-600 rounded-md'></li>
                <li className='bg-neutral-700 h-12 border border-neutral-600 rounded-md'></li>
                <li className='bg-neutral-700 h-12 border border-neutral-600 rounded-md'></li>
                <li className='bg-neutral-700 h-12 border border-neutral-600 rounded-md'></li>
                <li className='bg-neutral-700 h-12 border border-neutral-600 rounded-md'></li>
                <li className='bg-neutral-700 h-12 border border-neutral-600 rounded-md'></li>
            </ul>
        </section>
    </section>
  )
}

export default Skeleton