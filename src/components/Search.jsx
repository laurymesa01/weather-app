import { useRef, useState, useContext, useEffect } from 'react'

import { WeatherContext } from "../context/WeatherContext";
import CityAutocomplete from './CityAutocomplete';


const Search = () => {

  const [input, setInput] = useState('');
  const [activeIndex, setActiveIndex] = useState(-1);
  const { setCity, setQuery, suggestions, setSuggestions, isLoadingCitiesSuggestions, setIsLoadingCitiesSuggestions, suggestionsError } = useContext(WeatherContext);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setSuggestions([]);
        setIsLoadingCitiesSuggestions(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [setSuggestions, setIsLoadingCitiesSuggestions]);

  const handleKeyUp = (e) => {
    setActiveIndex(-1);
    setQuery(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    setCity(input);
    setInput('');
  }

  const handleSelectSuggestion = (suggestion) => {
    setQuery('');
    setCity(suggestion);
    setSuggestions([]);
    setInput('');
  }

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      if (suggestions.length === 0) return;
      e.preventDefault();
      setActiveIndex(prev => Math.min(prev + 1, suggestions.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveIndex(prev => Math.max(prev - 1, -1));
    } else if (e.key === 'Enter' && activeIndex >= 0) {
      e.preventDefault();
      handleSelectSuggestion(suggestions[activeIndex]);
    } else if (e.key === 'Escape') {
      setSuggestions([]);
      setIsLoadingCitiesSuggestions(false);
      setActiveIndex(-1);
    }
  };

  return (
    <form action="" className="mt-12 flex flex-col items-center gap-2 md:flex-row lg:justify-center" onSubmit={handleSubmit}>
      <div ref={containerRef} className="relative search-input">
          <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="21" height="21" fill="none" viewBox="0 0 21 21">
            <path fill="#D4D3D9" d="M19.844 18.82c.195.196.195.508 0 .664l-.899.899c-.156.195-.468.195-.664 0l-4.726-4.727a.63.63 0 0 1-.117-.351v-.508c-1.446 1.21-3.282 1.953-5.313 1.953A8.119 8.119 0 0 1 0 8.625C0 4.172 3.633.5 8.125.5c4.453 0 8.125 3.672 8.125 8.125 0 2.031-.781 3.906-1.992 5.313h.508c.117 0 .234.078.351.156l4.727 4.726ZM8.125 14.875a6.243 6.243 0 0 0 6.25-6.25c0-3.438-2.813-6.25-6.25-6.25a6.243 6.243 0 0 0-6.25 6.25 6.219 6.219 0 0 0 6.25 6.25Z"/>
          </svg>
          <label htmlFor="search" className="sr-only">Search city</label>
          <input  id="search"
                  type="text"
                  autoComplete="off"
                  role="combobox"
                  aria-expanded={suggestions.length > 0}
                  aria-controls="search-suggestions"
                  aria-autocomplete="list"
                  aria-activedescendant={activeIndex >= 0 ? `suggestion-${activeIndex}` : undefined}
                  placeholder="Search for a place..."
                  className="text-preset-5-medium outline-none focus:outline-none w-full "
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyUp={handleKeyUp}
                  onKeyDown={handleKeyDown}/>
        {(isLoadingCitiesSuggestions || suggestions.length > 0 || suggestionsError) && (
          <CityAutocomplete
            suggestions={suggestions}
            onSelect={handleSelectSuggestion}
            isLoadingCitiesSuggestions={isLoadingCitiesSuggestions}
            suggestionsError={suggestionsError}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          />
        )}
      </div>
      <button type="submit" className="search-button">Search</button>
    </form>
  )
}

export default Search
