import { useState, useEffect } from "react";

import { WeatherContext } from "./WeatherContext";
import {fetchWeather} from '../services/fetchWeather';


export function WeatherProvider({ children }) {

  const [city, setCity] = useState("");
  const [units, setUnits] = useState({
    temperature_unit: "celsius",
    wind_speed_unit: "kmh",
    precipitation_unit: "mm"
  });

  const [weather, setWeather] = useState({
    city: "Berlin",
    country: "Germany",
    current: {
      temperature_2m: 20,
      apparent_temperature: 18,
      relative_humidity_2m: 46,
      wind_speed_10m: 14,
      time: '',
      precipitation: 0,
      weather_code: 0
    },
    currentUnits: {
      temperature_2m: "°C",
      apparent_temperature: "°C",
      relative_humidity_2m: "%",
      wind_speed_10m: "km/h",
      precipitation: "mm"
    },
    daily: {
      weather_code: [],
      temperature_2m_max: [],
      temperature_2m_min: []
    },

  });

  useEffect(() => {
    if (!city) return;

    async function loadWeather() {
      try {
        const data = await fetchWeather(city, units);
        setWeather(data);
      }
      catch (err) {
        console.error(err)
      }
    }
    loadWeather();
  }, [city, units]);

  return (
    <WeatherContext.Provider value={{weather, setCity, setUnits, units}}>
      {children}
    </WeatherContext.Provider>
  );
}
