import { useState, useEffect, useCallback } from 'react'

import { WeatherContext } from './WeatherContext'
import { fetchWeather } from '../services/fetchWeather'
import { useCitySuggestions } from '../hooks/useCitySuggestions'

export function WeatherProvider({ children }) {
  const [city, setCity] = useState('')
  const [query, setQuery] = useState('')
  const [state, setState] = useState('idle')
  const [units, setUnits] = useState({
    temperature_unit: 'celsius',
    wind_speed_unit: 'kmh',
    precipitation_unit: 'mm',
  })
  const [weather, setWeather] = useState(null)

  const { suggestions, setSuggestions, isLoadingCitiesSuggestions, setIsLoadingCitiesSuggestions, suggestionsError } =
    useCitySuggestions(query)

  useEffect(() => {
    if (!navigator.geolocation) return
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        setState('locating')
        setCity({ latitude: coords.latitude, longitude: coords.longitude })
      },
      () => setState('idle')
    )
  }, [])

  const loadWeather = useCallback(async () => {
    if (!city) return
    try {
      setState('loading')
      const data = await fetchWeather(city, units)
      setWeather(data)
      setState('success')
    } catch (err) {
      console.error(err)
      if (err.message === 'City not found') {
        setState('notfound')
        return
      }
      setWeather(null)
      setState('error')
    }
  }, [city, units])

  useEffect(() => {
    loadWeather()
  }, [loadWeather])

  return (
    <WeatherContext.Provider
      value={{
        weather, setCity, setUnits, units, setQuery,
        suggestions, setSuggestions, state,
        isLoadingCitiesSuggestions, setIsLoadingCitiesSuggestions,
        suggestionsError,
        retry: loadWeather,
      }}
    >
      {children}
    </WeatherContext.Provider>
  )
}
