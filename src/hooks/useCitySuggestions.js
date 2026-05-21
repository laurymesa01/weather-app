import { useState, useEffect } from 'react'
import { fetchCitysuggestions } from '../services/fetchWeather'

export function useCitySuggestions(query) {
  const [suggestions, setSuggestions] = useState([])
  const [isLoadingCitiesSuggestions, setIsLoadingCitiesSuggestions] = useState(false)

  useEffect(() => {
    if (!query || query.trim().length < 2) {
      setTimeout(() => {
        setSuggestions([])
        setIsLoadingCitiesSuggestions(false)
      }, 0)
      return
    }

    const timer = setTimeout(async () => {
      try {
        setIsLoadingCitiesSuggestions(true)
        const data = await fetchCitysuggestions(query)
        setSuggestions(data)
      } catch (err) {
        console.error(err)
      } finally {
        setIsLoadingCitiesSuggestions(false)
      }
    }, 300)

    return () => clearTimeout(timer)
  }, [query])

  return { suggestions, setSuggestions, isLoadingCitiesSuggestions, setIsLoadingCitiesSuggestions }
}
