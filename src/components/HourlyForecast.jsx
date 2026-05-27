import { useContext, useState, useRef } from 'react'

import WeatherIcon from './WeatherIcon'
import DaysDropdown from './DaysDropdown'
import ChevronIcon from './ChevronIcon'
import Skeleton from "./Skeleton";


import { WeatherContext } from '../context/WeatherContext'
import { getHourlyForecast } from '../utils/format'

const HourlyForecast = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [selectedDay, setSelectedDay] = useState(
    new Date().toLocaleDateString('en-US', { weekday: 'long' })
  )
  const triggerRef = useRef(null)
  const { weather } = useContext(WeatherContext)

  if (!weather.hourly?.time) return <Skeleton />;

  const hourlyForecast = getHourlyForecast(weather, selectedDay)

  return (
    <section className="p-4 bg-neutral-800 rounded-xl" aria-label="Hourly forecast">
      <div className="flex justify-between items-center relative">
        <p className="text-preset-5 text-neutral-0">Hourly Forecast</p>
        <button
          ref={triggerRef}
          className="flex items-center gap-2 bg-neutral-600 p-2 rounded-md cursor-pointer focus:border focus:border-neutral-0 focus:shadow-md focus:shadow-neutral-900"
          onClick={() => setIsDropdownOpen(prev => !prev)}
          id="days-dropdown-trigger"
          aria-expanded={isDropdownOpen}
          aria-controls="days-dropdown"
          aria-haspopup="menu"
        >
          <p className="text-[16px] font-medium text-neutral-0">{selectedDay}</p>
          <ChevronIcon isOpen={isDropdownOpen} />
        </button>
        {isDropdownOpen && (
          <DaysDropdown
            selectedDay={selectedDay}
            setSelectedDay={setSelectedDay}
            setIsDropdownOpen={setIsDropdownOpen}
            triggerRef={triggerRef}
          />
        )}
      </div>
      <ul className="flex flex-col gap-4 mt-4">
        {hourlyForecast.map((hour) => (
          <li key={hour.fullDate} className="flex flex-row justify-between items-center p-3 bg-neutral-700 border border-neutral-600 rounded-md">
            <div className="flex flex-row items-center gap-4">
              <WeatherIcon code={hour.weatherCode} className="w-12 h-12" />
              <p className="text-preset-5-medium text-neutral-0">{hour.time}</p>
            </div>
            <p className="text-preset-7 text-neutral-0">{hour.temperature} °</p>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default HourlyForecast
