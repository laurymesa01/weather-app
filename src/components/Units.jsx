// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react'
import { WeatherContext } from '../context/WeatherContext'

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
                <p className={`text-preset-7 text-neutral-0 p-2 rounded-md ${!isImperial ? 'bg-neutral-700' : ''}`}>Celcius (°C)</p>
                <p className={`text-preset-7 text-neutral-0 p-2 rounded-md ${isImperial ? 'bg-neutral-700' : ''}`}>Fahrenheit (°F)</p>
            </li>
            <li className='border-b border-neutral-600 pb-2 flex flex-col gap-2'>
                <p className='text-preset-8 text-neutral-300'>Wind Speed</p>
                <p className={`text-preset-7 text-neutral-0 p-2 rounded-md ${!isImperial ? 'bg-neutral-700' : ''}`}>km/h</p>
                <p className={`text-preset-7 text-neutral-0 p-2 rounded-md ${isImperial ? 'bg-neutral-700' : ''}`}>mph</p>
             </li>
            <li className='border-b border-neutral-600 pb-2 flex flex-col gap-2'>
                <p className='text-preset-8 text-neutral-300'>Precipitation</p>
                <p className={`text-preset-7 text-neutral-0 p-2 rounded-md ${!isImperial ? 'bg-neutral-700' : ''}`}>Millimeters (mm)</p>
                <p className={`text-preset-7 text-neutral-0 p-2 rounded-md ${isImperial ? 'bg-neutral-700' : ''}`}>Inches (in)</p>
            </li>
          </ul>

        </div>
    </div>
  )
}

export default Units