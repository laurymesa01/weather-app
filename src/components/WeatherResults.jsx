/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import DailyForecast from './DailyForecast'
import HourlyForecast from './HourlyForecast'

import { WeatherContext } from "../context/WeatherContext";
import { formatDate } from "../utils/format";


const WeatherResults = () => {

    const {weather} = useContext(WeatherContext);
    
  return (
    <section className='flex flex-col  gap-4 py-4 xl:flex-row '> 
        <section className='flex flex-col gap-8 xl:w-2/3'>
            <div className='h-70 p-4 flex flex-col justify-center items-center gap-2 md:flex-row md:justify-between md:items-center bg-[url(/images/bg-today-small.svg)] md:bg-[url(/images/bg-today-large.svg)] bg-cover bg-center rounded-xl '>
                <div>
                    <p className='text-preset-4 text-neutral-0'>{weather.city}, {weather.country}</p>
                    <p className='text-preset-6 text-neutral-0 opacity-80'>{formatDate(weather.current.time)}</p>
                </div>
                <div>
                    <p className='text-preset-1 text-neutral-0'>{weather.current.temperature_2m}°</p>
                </div>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
                <div className='bg-neutral-800 rounded-xl p-4 border border-neutral-600'>
                    <p className='text-preset-6 text-neutral-200'>Feels like</p>
                    <p className='text-preset-3 text-neutral-0 mt-3'>{weather.current.apparent_temperature}°</p>
                </div>
                <div className='bg-neutral-800 rounded-xl p-4 border border-neutral-600'>
                    <p className='text-preset-6 text-neutral-200'>Humidity</p>
                    <p className='text-preset-3 text-neutral-0 mt-3'>{weather.current.relative_humidity_2m}%</p>
                </div>
                <div className='bg-neutral-800 rounded-xl p-4 border border-neutral-600'>
                    <p className='text-preset-6 text-neutral-200'>Wind</p>
                    <p className='text-preset-3 text-neutral-0 mt-3'>{weather.current.wind_speed_10m} km/h</p>
                </div>
                <div className='bg-neutral-800 rounded-xl p-4 border border-neutral-600'>
                    <p className='text-preset-6 text-neutral-200'>Precipitation</p>
                    <p className='text-preset-3 text-neutral-0 mt-3'>{weather.current.precipitation} mm</p>
                </div>
            </div>
            <div>
                <p className='text-preset-5 text-neutral-0'>Daily forecast</p>
                <DailyForecast />
            </div>

        </section>
        <section className='xl:flex-1'>
            <HourlyForecast />
        </section>
    </section>
  )
}

export default WeatherResults