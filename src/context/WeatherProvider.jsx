import { useState, useEffect } from "react";

import { WeatherContext } from "./WeatherContext";
import {fetchWeather} from '../services/fetchWeather';


export function WeatherProvider({ children }) {

  const [query, setQuery] = useState("");
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
    },
    daily: {
      weather_code: [],
      temperature_2m_max: [],
      temperature_2m_min: []
    },

  });

  useEffect(() => {
    if (!query) return;

    async function loadWeather() {
      try {
        const data = await fetchWeather(query);
        setWeather(data);
      } 
      catch (err) {
        console.error(err)
      }
    }
    loadWeather();
  }, [query]);

  return (
    <WeatherContext.Provider value={{weather, setQuery}}>
      {children}
    </WeatherContext.Provider>
  );
}