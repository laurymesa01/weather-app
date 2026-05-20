import { useState, useEffect } from "react";

import { WeatherContext } from "./WeatherContext";
import {fetchCitysuggestions, fetchWeather} from '../services/fetchWeather';


export function WeatherProvider({ children }) {

  const [city, setCity] = useState("");
  const [query, setQuery] = useState("");
  const [state, setState] = useState('idle'); // 'idle', 'loading', 'error' , 'notfound', 'success', 'locating'
  const [units, setUnits] = useState({
    temperature_unit: "celsius",
    wind_speed_unit: "kmh",
    precipitation_unit: "mm"
  });

  const [suggestions, setSuggestions] = useState([]);
  const [weather, setWeather] = useState(null);
  const [isLoadingCitiesSuggestions, setIsLoadingCitiesSuggestions] = useState(false); 


  useEffect(() => {
    if (!navigator.geolocation) return;
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        setState('locating');
        setCity({ latitude: coords.latitude, longitude: coords.longitude })
      },
      () => setState('idle')
    );
  }, []);

  useEffect(() => {
    if (!city) return;

    async function loadWeather() {
      try {
        setState('loading');
        const data = await fetchWeather(city, units);
        setWeather(data);
        setState('success');
      }
      catch (err) {
        console.error(err)
        if (err.message === 'City not found') {
          setState('notfound');
          return;
        } 
        setWeather(null);
        setState('error');
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
            setIsLoadingCitiesSuggestions(false);
            return;
          }
          setIsLoadingCitiesSuggestions(true);
          const data = await fetchCitysuggestions(query);
          setSuggestions(data);
          setIsLoadingCitiesSuggestions(false);
        } catch (err) {
          console.error(err);
        }
      }
      loadSuggestions();
    }, 300)

    return () => clearTimeout(delayDebounceFn);
  }, [query])

  return (
    <WeatherContext.Provider value={{weather, setCity, setUnits, units, setQuery, suggestions, setSuggestions, state, isLoadingCitiesSuggestions}}>
      {children}
    </WeatherContext.Provider>
  );
}
