import { useState, useEffect } from "react";

import { WeatherContext } from "./WeatherContext";
import {fetchWeather} from '../services/fetchWeather';


export function WeatherProvider({ children }) {

  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState(null);

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