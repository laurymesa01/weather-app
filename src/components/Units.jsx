// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react'
import { WeatherContext } from '../context/WeatherContext'

const Checkmark = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="11" fill="none" viewBox="0 0 14 11">
    <path fill="#fff" d="M11.895 1.047c.136-.137.355-.137.464 0l.793.766c.11.136.11.355 0 .464L4.95 10.48a.315.315 0 0 1-.465 0L.82 6.844c-.11-.137-.11-.356 0-.465l.793-.793c.11-.11.328-.11.465 0l2.625 2.652 7.192-7.191Z"/>
  </svg>
)

const Units = ({setIsDropdownOpen}) => {

  const { setUnits, units } = useContext(WeatherContext);

  const isImperial = units.temperature_unit === "fahrenheit";

  const handleToggleUnits = () => {
    setUnits(isImperial
      ? { temperature_unit: "celsius", wind_speed_unit: "kmh", precipitation_unit: "mm" }
      : { temperature_unit: "fahrenheit", wind_speed_unit: "mph", precipitation_unit: "inch" }
    );
    setIsDropdownOpen(false);
  };

  return (
    <div id="dropdown" className="z-10 w-44 absolute top-full right-0 mt-2">
        <div className="p-2 bg-neutral-800 border border-neutral-600 rounded-xl" aria-labelledby="dropdownDefaultButton">
          <button className='text-preset-7 switch-button' onClick={handleToggleUnits}>
            {isImperial ? 'Switch to Metric' : 'Switch to Imperial'}
          </button>
          <ul className='flex flex-col gap-2 mt-2'>
            <li className='border-b border-neutral-600 pb-2 flex flex-col gap-2'>
                <p className='text-preset-8 text-neutral-300'>Temperature</p>
                <p className={`text-preset-7 text-neutral-0 p-2 rounded-md flex items-center justify-between ${!isImperial ? 'bg-neutral-700' : ''}`}>Celcius (°C) {!isImperial && <Checkmark />}</p>
                <p className={`text-preset-7 text-neutral-0 p-2 rounded-md flex items-center justify-between ${isImperial ? 'bg-neutral-700' : ''}`}>Fahrenheit (°F) {isImperial && <Checkmark />}</p>
            </li>
            <li className='border-b border-neutral-600 pb-2 flex flex-col gap-2'>
                <p className='text-preset-8 text-neutral-300'>Wind Speed</p>
                <p className={`text-preset-7 text-neutral-0 p-2 rounded-md flex items-center justify-between ${!isImperial ? 'bg-neutral-700' : ''}`}>km/h {!isImperial && <Checkmark />}</p>
                <p className={`text-preset-7 text-neutral-0 p-2 rounded-md flex items-center justify-between ${isImperial ? 'bg-neutral-700' : ''}`}>mph {isImperial && <Checkmark />}</p>
             </li>
            <li className='border-b border-neutral-600 pb-2 flex flex-col gap-2'>
                <p className='text-preset-8 text-neutral-300'>Precipitation</p>
                <p className={`text-preset-7 text-neutral-0 p-2 rounded-md flex items-center justify-between ${!isImperial ? 'bg-neutral-700' : ''}`}>Millimeters (mm) {!isImperial && <Checkmark />}</p>
                <p className={`text-preset-7 text-neutral-0 p-2 rounded-md flex items-center justify-between ${isImperial ? 'bg-neutral-700' : ''}`}>Inches (in) {isImperial && <Checkmark />}</p>
            </li>
          </ul>

        </div>
    </div>
  )
}

export default Units