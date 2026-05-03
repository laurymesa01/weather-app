/* eslint-disable no-unused-vars */
import React from 'react'
import DailyForecast from './DailyForecast'

const WeatherResults = () => {
  return (
    <>
        <section>
            <div>
                <div>
                    <p>Berlin, Germany</p>
                    <p>Tuesday, Aug 5, 2025</p>
                </div>
                <div>
                    <p>20</p>
                </div>
            </div>
            <div>
                <div>
                    <p>Feels like</p>
                    <p>18</p>
                </div>
                <div>
                    <p>Humidity</p>
                    <p>46%</p>
                </div>
                <div>
                    <p>Wind</p>
                    <p>14 km/h</p>
                </div>
                <div>
                    <p>Precipitation</p>
                    <p>0 mm</p>
                </div>
            </div>
            <div>
                <p>Daily forecast</p>
                <DailyForecast />
            </div>

        </section>
    </>
  )
}

export default WeatherResults