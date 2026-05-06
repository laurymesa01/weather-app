// eslint-disable-next-line no-unused-vars
import React from 'react'

const DailyForecast = () => {
  return (
    <ul className='grid grid-cols-3 md:grid-cols-7 gap-4 mt-4'>
        <li className='bg-neutral-800 rounded-xl p-2 border border-neutral-600 text-center'>
            <p className='text-preset-6 text-neutral-0'>Tue</p>
            
            <div className='flex justify-between items-center mt-4'>
                <p className='text-preset-7 text-neutral-0'>20</p>
                <p className='text-preset-7 text-neutral-200'>14</p>
            </div>
        </li>
        <li className='bg-neutral-800 rounded-xl p-2 border border-neutral-600 text-center'>            
            <p className='text-preset-6 text-neutral-0'>Wed</p>
            
            <div className='flex justify-between items-center mt-4'>
                <p className='text-preset-7 text-neutral-0'>21</p>
                <p className='text-preset-7 text-neutral-200'>15</p>
            </div>
        </li>
        <li className='bg-neutral-800 rounded-xl p-2 border border-neutral-600 text-center'>            
            <p className='text-preset-6 text-neutral-0'>Thu</p>
            <div className='flex justify-between items-center mt-4'>
                <p className='text-preset-7 text-neutral-0'>24</p>
                <p className='text-preset-7 text-neutral-200'>14</p>
            </div>
        </li>
        <li className='bg-neutral-800 rounded-xl p-2 border border-neutral-600 text-center'>            
            <p className='text-preset-6 text-neutral-0'>Fri</p>
            <div className='flex justify-between items-center mt-4'>
                <p className='text-preset-7 text-neutral-0'>21</p>
                <p className='text-preset-7 text-neutral-200'>13</p>
            </div>
        </li>
        <li className='bg-neutral-800 rounded-xl p-2 border border-neutral-600 text-center'>            
            <p className='text-preset-6 text-neutral-0'>Sat</p>
            <div className='flex justify-between items-center mt-4'>
                <p className='text-preset-7 text-neutral-0'>21</p>
                <p className='text-preset-7 text-neutral-200'>15</p>
            </div>
        </li>
        <li className='bg-neutral-800 rounded-xl p-2 border border-neutral-600 text-center'>            
            <p className='text-preset-6 text-neutral-0'>Sun</p>
            <div className='flex justify-between items-center mt-4'>
                <p className='text-preset-7 text-neutral-0'>25</p>
                <p className='text-preset-7 text-neutral-200'>16</p>
            </div>
        </li>
        <li className='bg-neutral-800 rounded-xl p-2 border border-neutral-600 text-center'>            
            <p className='text-preset-6 text-neutral-0'>Mon</p>
            <div className='flex justify-between items-center mt-4'>
                <p className='text-preset-7 text-neutral-0'>24</p>
                <p className='text-preset-7 text-neutral-200'>15</p>
            </div>
        </li>
    </ul>
  )
}

export default DailyForecast