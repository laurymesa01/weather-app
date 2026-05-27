import { useState, useEffect, useCallback, useReducer } from 'react'

import { WeatherContext } from './WeatherContext'
import { fetchWeather } from '../services/fetchWeather'
import { useCitySuggestions } from '../hooks/useCitySuggestions'

function weatherReducer(prev, action) {
  switch (action.type) {
    case 'locating':      return { ...prev, appState: 'locating' }
    case 'loading':       return { ...prev, appState: 'loading' }
    case 'success':       return { appState: 'success', weather: action.weather }
    case 'notfound':      return { ...prev, appState: 'notfound' }
    case 'error':         return { appState: 'error', weather: null }
    case 'locationdenied': return { ...prev, appState: 'locationdenied' }
    case 'idle':          return { ...prev, appState: 'idle' }
    default:              return prev
  }
}

export function WeatherProvider({ children }) {
  const [city, setCity] = useState('')
  const [query, setQuery] = useState('')
  const [units, setUnits] = useState({
    temperature_unit: 'celsius',
    wind_speed_unit: 'kmh',
    precipitation_unit: 'mm',
  })
  const [{ appState, weather }, dispatch] = useReducer(weatherReducer, {
    appState: 'idle',
    weather: null,
  })

  const { suggestions, setSuggestions, isLoadingCitiesSuggestions, setIsLoadingCitiesSuggestions, suggestionsError } =
    useCitySuggestions(query)

  useEffect(() => {
    if (!navigator.geolocation) return
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        dispatch({ type: 'locating' })
        setCity({ latitude: coords.latitude, longitude: coords.longitude })
      },
      (err) => dispatch({ type: err.code === 1 ? 'locationdenied' : 'idle' })
    )
  }, [])

  const loadWeather = useCallback(async () => {
    if (!city) return
    try {
      dispatch({ type: 'loading' })
      const data = await fetchWeather(city, units)
      dispatch({ type: 'success', weather: data })
    } catch (err) {
      console.error(err)
      if (err.message === 'City not found') {
        dispatch({ type: 'notfound' })
        return
      }
      dispatch({ type: 'error' })
    }
  }, [city, units])

  useEffect(() => {
    loadWeather()
  }, [loadWeather])

  return (
    <WeatherContext.Provider
      value={{
        weather, setCity, setUnits, units, setQuery,
        suggestions, setSuggestions, state: appState,
        isLoadingCitiesSuggestions, setIsLoadingCitiesSuggestions,
        suggestionsError,
        retry: loadWeather,
      }}
    >
      {children}
    </WeatherContext.Provider>
  )
}
