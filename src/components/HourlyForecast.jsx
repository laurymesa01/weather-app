// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react'

import WeatherIcon from './WeatherIcon';

import { WeatherContext } from "../context/WeatherContext";

const HourlyForecast = () => {

    const {weather} = useContext(WeatherContext);

    if (!weather.hourly || !weather.hourly.time) {
        return <p>Loading forecast...</p>;
    }

    const hourlyForecast = weather.hourly.time.map((time, index) => ({
        time: new Date(time).toLocaleTimeString("en-US", { hour: "numeric" }),
        temperature: weather.hourly.temperature_2m[index],
        weatherCode: weather.hourly.weather_code[index],
        fullDate: time
      })).filter(hour => {
        const dayName = new Date(hour.fullDate).toLocaleDateString("en-US", {
          weekday: "long"
        });
        return dayName === "Tuesday";
    });

      console.log('HOURLY',hourlyForecast)
      
    
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
            {hourlyForecast.map((hour, index) => (
                <li key={index} className='flex flex-row justify-between items-center p-3 bg-neutral-700 border border-neutral-600 rounded-md'>
                    <div className='flex flex-row items-center gap-4'>
                        <WeatherIcon code={hour.weatherCode} />
                        <p className='text-preset-5-medium text-neutral-0'>{hour.time}</p>
                    </div>
                    <p className='text-preset-7 text-neutral-0'>{hour.temperature} °</p>
                </li>
            ))}
        </ul>
    </section>
  )
}

export default HourlyForecast