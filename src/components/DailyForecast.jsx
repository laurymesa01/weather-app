import { useContext, useMemo } from 'react'

import WeatherIcon from './WeatherIcon';
import Skeleton from "./Skeleton";

import { WeatherContext } from "../context/WeatherContext";
import { getDailyForecast } from '../utils/format';



const DailyForecast = () => {

    const {weather} = useContext(WeatherContext);

    const forecast = useMemo(() => getDailyForecast(weather), [weather.daily]);


    if (forecast.length === 0) {
        return <Skeleton/>;
    }

  return (
    <ul className='grid grid-cols-3 md:grid-cols-7 gap-4 mt-4'>
        {forecast.map(day => (
            <li key={day.date} className='bg-neutral-800 rounded-xl p-2 border border-neutral-600 text-center'>
                <p className='text-preset-6 text-neutral-0'>{day.label}</p>
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