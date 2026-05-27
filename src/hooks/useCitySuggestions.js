import { useEffect, useReducer } from 'react'
import { fetchCitysuggestions } from '../services/fetchWeather'

const initial = { suggestions: [], isLoadingCitiesSuggestions: false, suggestionsError: false }

export function useCitySuggestions(query) {
  const [state, dispatch] = useReducer(
    (prev, patch) => ({ ...prev, ...patch }),
    initial
  )

  useEffect(() => {
    if (!query || query.trim().length < 2) {
      dispatch(initial)
      return
    }

    const timer = setTimeout(async () => {
      try {
        dispatch({ isLoadingCitiesSuggestions: true, suggestionsError: false })
        const data = await fetchCitysuggestions(query)
        dispatch({ suggestions: data, isLoadingCitiesSuggestions: false })
      } catch (err) {
        console.error(err)
        dispatch({ suggestions: [], isLoadingCitiesSuggestions: false, suggestionsError: true })
      }
    }, 300)

    return () => clearTimeout(timer)
  }, [query])

  return {
    ...state,
    setSuggestions: (suggestions) => dispatch({ suggestions }),
    setIsLoadingCitiesSuggestions: (isLoadingCitiesSuggestions) => dispatch({ isLoadingCitiesSuggestions }),
  }
}
