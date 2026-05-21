// eslint-disable-next-line no-unused-vars
import React, { useContext, useRef, useEffect } from 'react'
import { WeatherContext } from '../context/WeatherContext'

const Checkmark = () => (
  <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="14" height="11" fill="none" viewBox="0 0 14 11">
    <path fill="#fff" d="M11.895 1.047c.136-.137.355-.137.464 0l.793.766c.11.136.11.355 0 .464L4.95 10.48a.315.315 0 0 1-.465 0L.82 6.844c-.11-.137-.11-.356 0-.465l.793-.793c.11-.11.328-.11.465 0l2.625 2.652 7.192-7.191Z"/>
  </svg>
)

const unitSections = [
  { label: "Temperature", metric: "Celsius (°C)", imperial: "Fahrenheit (°F)" },
  { label: "Wind Speed", metric: "km/h", imperial: "mph" },
  { label: "Precipitation", metric: "Millimeters (mm)", imperial: "Inches (in)" },
]

const Units = ({setIsDropdownOpen, triggerRef}) => {

  const { setUnits, units } = useContext(WeatherContext)
  const switchButtonRef = useRef(null)

  const isImperial = units.temperature_unit === "fahrenheit"

  useEffect(() => {
    switchButtonRef.current?.focus()
  }, [])

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      e.preventDefault()
      setIsDropdownOpen(false)
      triggerRef?.current?.focus()
    }
  }

  const handleToggleUnits = () => {
    setUnits(isImperial
      ? { temperature_unit: "celsius", wind_speed_unit: "kmh", precipitation_unit: "mm" }
      : { temperature_unit: "fahrenheit", wind_speed_unit: "mph", precipitation_unit: "inch" }
    )
    setIsDropdownOpen(false)
    triggerRef?.current?.focus()
  }

  return (
    <div id="units-dropdown" className="z-10 w-44 absolute top-full right-0 mt-2 animate-dropdown-open origin-top-right" onKeyDown={handleKeyDown}>
        <div className="dropdown-panel" aria-labelledby="units-dropdown-button">
          <button
            ref={switchButtonRef}
            className="text-preset-7 switch-button"
            onClick={handleToggleUnits}
            aria-label={isImperial ? "Switch to Metric units" : "Switch to Imperial units"}
          >
            {isImperial ? "Switch to Metric" : "Switch to Imperial"}
          </button>
          <ul className="flex flex-col gap-2 mt-2" role="list">
            {unitSections.map(({ label, metric, imperial }) => (
              <li key={label} className="border-b border-neutral-600 pb-2 flex flex-col gap-2">
                <p className="text-preset-8 text-neutral-300">{label}</p>
                <p className={`text-preset-7 text-neutral-0 p-2 rounded-md flex items-center justify-between ${!isImperial ? 'bg-neutral-700' : ''}`} aria-current={!isImperial ? "true" : undefined}>
                  {metric} {!isImperial && <Checkmark />}
                </p>
                <p className={`text-preset-7 text-neutral-0 p-2 rounded-md flex items-center justify-between ${isImperial ? 'bg-neutral-700' : ''}`} aria-current={isImperial ? "true" : undefined}>
                  {imperial} {isImperial && <Checkmark />}
                </p>
              </li>
            ))}
          </ul>
        </div>
    </div>
  )
}

export default Units
