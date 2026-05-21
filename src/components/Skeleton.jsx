/* eslint-disable no-unused-vars */
import React from 'react'
import ChevronIcon from './ChevronIcon'

const Skeleton = () => {

    const weatherConditions = ["Feels like", "Humidity", "Wind", "Precipitation"];
  return (
    <section role="status" aria-label="Loading weather data" className="flex flex-col gap-4 py-4 xl:flex-row animate-pulse">
        <section className="flex flex-col gap-8 xl:w-2/3">
            <div className="h-70 rounded-xl bg-neutral-700 flex flex-col justify-center items-center">
                <p className="text-preset-6 text-neutral-200 text-center">Loading...</p>
            </div>
            <ul className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {weatherConditions.map((condition, index) => (
                        <li key={index} className="bg-neutral-700 rounded-xl p-4 border border-neutral-600 mb-4">
                            <p className="text-preset-6 text-neutral-200">{condition}</p>
                            <p className="text-preset-3 text-neutral-0 mt-3">--</p>
                        </li>
                    ))}
            </ul>
            <div>
                <p className="text-preset-5 text-neutral-0">Daily forecast</p>
                <ul className="grid grid-cols-3 md:grid-cols-7 gap-4 mt-4" aria-hidden="true">
                    <li className="bg-neutral-800 h-40 p-2 rounded-xl border border-neutral-600 "></li>
                    <li className="bg-neutral-800 h-40 p-2 rounded-xl border border-neutral-600"></li>
                    <li className="bg-neutral-800 h-40 p-2 rounded-xl border border-neutral-600"></li>
                    <li className="bg-neutral-800 h-40 p-2 rounded-xl border border-neutral-600"></li>
                    <li className="bg-neutral-800 h-40 p-2 rounded-xl border border-neutral-600"></li>
                    <li className="bg-neutral-800 h-40 p-2 rounded-xl border border-neutral-600"></li>
                    <li className="bg-neutral-800 h-40 p-2 rounded-xl border border-neutral-600"></li>
                </ul>
            </div>
        </section>
        <section className="xl:flex-1 bg-neutral-800 rounded-xl p-4 animate-pulse" aria-hidden="true">
            <div className="flex justify-between items-center">
                <p className="text-preset-5 text-neutral-0">Hourly forecast</p>
                <div className="flex items-center gap-2 bg-neutral-600 p-2 rounded-md">
                    <p className=" text-neutral-0">-</p>
                    <ChevronIcon />
                </div>
            </div>
            <ul className="flex flex-col gap-4 mt-4">
                <li className="bg-neutral-700 h-12 border border-neutral-600 rounded-md"></li>
                <li className="bg-neutral-700 h-12 border border-neutral-600 rounded-md"></li>
                <li className="bg-neutral-700 h-12 border border-neutral-600 rounded-md"></li>
                <li className="bg-neutral-700 h-12 border border-neutral-600 rounded-md"></li>
                <li className="bg-neutral-700 h-12 border border-neutral-600 rounded-md"></li>
                <li className="bg-neutral-700 h-12 border border-neutral-600 rounded-md"></li>
                <li className="bg-neutral-700 h-12 border border-neutral-600 rounded-md"></li>
                <li className="bg-neutral-700 h-12 border border-neutral-600 rounded-md"></li>
            </ul>
        </section>
    </section>
  )
}

export default Skeleton
