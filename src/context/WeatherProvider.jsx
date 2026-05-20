import { useState, useEffect } from "react";

import { WeatherContext } from "./WeatherContext";
import {fetchCitysuggestions, fetchWeather} from '../services/fetchWeather';


export function WeatherProvider({ children }) {

  const [city, setCity] = useState("");
  const [query, setQuery] = useState("");
  const [isLocating, setIsLocating] = useState(true);

  const [units, setUnits] = useState({
    temperature_unit: "celsius",
    wind_speed_unit: "kmh",
    precipitation_unit: "mm"
  });

  const [suggestions, setSuggestions] = useState([]);
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    if (!navigator.geolocation) return;
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        setCity({ latitude: coords.latitude, longitude: coords.longitude })
        setIsLocating(false)
      },
      () => setIsLocating(false)
    );
  }, []);

  useEffect(() => {
    if (!city) return;

    async function loadWeather() {
      try {
        const data = await fetchWeather(city, units);
        setWeather(data);
      }
      catch (err) {
        console.error(err)
        setWeather({});
      }
    }
    loadWeather();
  }, [city, units]);

  useEffect(() => {
    if (!query) return;

    const delayDebounceFn = setTimeout(() => {
      async function loadSuggestions() {
        try {
          if (query.trim() === '' || query.trim().length < 2) {
            setSuggestions([]);
            return;
          }
          const data = await fetchCitysuggestions(query);
          setSuggestions(data);
        } catch (err) {
          console.error(err);
        }
      }
      loadSuggestions();
    }, 300)

    return () => clearTimeout(delayDebounceFn);
  }, [query])

  return (
    <WeatherContext.Provider value={{weather, setCity, setUnits, units, setQuery, suggestions, setSuggestions, isLocating}}>
      {children}
    </WeatherContext.Provider>
  );
}
