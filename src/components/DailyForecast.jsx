// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react'

import WeatherIcon from './WeatherIcon';

import { WeatherContext } from "../context/WeatherContext";



const DailyForecast = () => {

    const {weather} = useContext(WeatherContext);

    if (!weather.daily || !weather.daily.time) {
        return <p>Loading forecast...</p>;
    }
    
    const forecast = weather.daily.time.map((day, index) => ({
        date: new Date(day).toLocaleDateString("en-US", { weekday: "short" }),
        maxTemp: weather.daily.temperature_2m_max[index],
        minTemp: weather.daily.temperature_2m_min[index],
        weatherCode: weather.daily.weather_code[index],
      }));

  return (
    <ul className='grid grid-cols-3 md:grid-cols-7 gap-4 mt-4'>
        {forecast.map((day, index) => (
            <li key={index} className='bg-neutral-800 rounded-xl p-2 border border-neutral-600 text-center'>
                <p className='text-preset-6 text-neutral-0'>{day.date}</p>
                <WeatherIcon code={day.weatherCode} className='w-12 h-12 mt-4 mx-auto'/>
                <div className='flex justify-between items-center mt-4'>
                    <p className='text-preset-7 text-neutral-0'>{day.maxTemp}°</p>
                    <p className='text-preset-7 text-neutral-200'>{day.minTemp}°</p>
                </div>
            </li>
        ))}
    </ul>
  )
}

export default DailyForecast