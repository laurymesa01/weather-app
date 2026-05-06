// eslint-disable-next-line no-unused-vars
import React from 'react'

const Units = () => {
  return (
    <div id="dropdown" className="z-10 hidden w-44">
        <div className="p-2 bg-neutral-800 border border-neutral-600" aria-labelledby="dropdownDefaultButton">
          <p className='text-preset-7 text-neutral-0'>Switch to Imperial</p>
          <ul className='flex flex-col gap-2 mt-2'>          
            <li className='border-b border-neutral-600 pb-2'>
                <p className='text-preset-8  text-neutral-300'>Temperature</p>
                <a href="#" className="text-preset-7 text-neutral-0">Celcius(°C)</a>
                <a href="#" className='text-preset-7 text-neutral-0'>Fahrenheit(°F)</a>
            </li>
            <li className='border-b border-neutral-600 pb-2'>
                <p className='text-preset-8  text-neutral-300'>Wind Speed</p>
                <a href="#" className="text-preset-7 text-neutral-0">km/h</a>
                <a href="#" className='text-preset-7 text-neutral-0'>mph</a>
             </li>
            <li className='border-b border-neutral-600 pb-2'>
                <p className='text-preset-8  text-neutral-300'>Precipitation</p>
                <a href="#" className="text-preset-7 text-neutral-0">Millimeters(mm)</a>
                <a href="#" className='text-preset-7 text-neutral-0'>Inches(in)</a>
            </li>
          </ul>

        </div>
    </div>
  )
}

export default Units