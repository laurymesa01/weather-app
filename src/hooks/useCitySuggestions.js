import { useState, useEffect } from 'react'
import { fetchCitysuggestions } from '../services/fetchWeather'

export function useCitySuggestions(query) {
  const [suggestions, setSuggestions] = useState([])
  const [isLoadingCitiesSuggestions, setIsLoadingCitiesSuggestions] = useState(false)
  const [suggestionsError, setSuggestionsError] = useState(false)

  useEffect(() => {
    if (!query || query.trim().length < 2) {
      setSuggestions([])
      setIsLoadingCitiesSuggestions(false)
      return
    }

    const timer = setTimeout(async () => {
      try {
        setIsLoadingCitiesSuggestions(true)
        const data = await fetchCitysuggestions(query)
        setSuggestions(data)
        setSuggestionsError(false)
      } catch (err) {
        console.error(err)
        setSuggestions([])
        setSuggestionsError(true)
      } finally {
        setIsLoadingCitiesSuggestions(false)
      }
    }, 300)

    return () => clearTimeout(timer)
  }, [query])

  return { suggestions, setSuggestions, isLoadingCitiesSuggestions, setIsLoadingCitiesSuggestions, suggestionsError }
}
