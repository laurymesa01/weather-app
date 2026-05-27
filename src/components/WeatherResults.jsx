import { useContext } from 'react'

import DailyForecast from './DailyForecast'
import HourlyForecast from './HourlyForecast'
import WeatherIcon from './WeatherIcon'

import { WeatherContext } from "../context/WeatherContext";
import { formatDate } from "../utils/format";


const WeatherResults = () => {

    const {weather} = useContext(WeatherContext);


  return (
    <section aria-label="Weather results" className="flex flex-col gap-4 py-4 xl:flex-row">
                <section aria-label="Current weather and daily forecast" className="flex flex-col gap-8 xl:w-2/3">
                    <div className="h-70 p-4 flex flex-col justify-center items-center gap-2 md:flex-row md:justify-between md:items-center bg-[url(/images/bg-today-small.svg)] md:bg-[url(/images/bg-today-large.svg)] bg-cover bg-center rounded-xl">
                        <div>
                            <p className="text-preset-4 text-neutral-0 text-center md:text-start">{weather.city}, {weather.country}</p>
                            <p className="text-preset-6 text-neutral-0 opacity-80 text-center md:text-start">{formatDate(weather.current.time)}</p>
                        </div>
                        <div className="flex flex-row items-center gap-4">
                            <WeatherIcon code={weather.current.weather_code} className="w-16 h-16 sm:w-18 sm:h-18"/>
                            <p className="text-preset-1 text-neutral-0" aria-label={`${weather.current.temperature_2m} degrees`}>{weather.current.temperature_2m}&#176;</p>
                        </div>
                    </div>
                    <dl className="grid grid-cols-2 md:grid-cols-4 gap-4 ">
                        {[
                            { label: "Feels like", value: `${weather.current.apparent_temperature}°` },
                            { label: "Humidity", value: `${weather.current.relative_humidity_2m}%` },
                            { label: "Wind", value: `${weather.current.wind_speed_10m} ${weather.currentUnits.wind_speed_10m}` },
                            { label: "Precipitation", value: `${weather.current.precipitation} ${weather.currentUnits.precipitation}` },
                        ].map(({ label, value }) => (
                            <div key={label} className="bg-neutral-800 rounded-xl p-4 border border-neutral-600 transition-transform duration-200 hover:scale-105 hover:shadow-lg cursor-default">
                                <dt className="text-preset-6 text-neutral-200">{label}</dt>
                                <dd className="text-preset-3 text-neutral-0 mt-3">{value}</dd>
                            </div>
                        ))}
                    </dl>
                    <div>
                        <h2 className="text-preset-5 text-neutral-0">Daily forecast</h2>
                        <DailyForecast />
                    </div>

                </section>
                <section className="xl:flex-1">
                    <HourlyForecast />
                </section>
    </section>
  )
}

export default WeatherResults
