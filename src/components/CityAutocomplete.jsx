// eslint-disable-next-line no-unused-vars
import React from 'react'

const CityAutocomplete = ({suggestions, onSelect, isLoadingCitiesSuggestions, activeIndex, setActiveIndex}) => {

  return (
    <div id="search-suggestions" className="z-10 w-full absolute top-full left-0 mt-2 animate-dropdown-open origin-top">
        {isLoadingCitiesSuggestions ? (
            <div role="status" className="bg-neutral-800 rounded-xl flex flex-row items-center gap-2 p-3 border border-neutral-600">
              <svg aria-hidden="true" className="animate-spin" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><path fill="#fff" d="M9.25 1.5c0 .719-.563 1.25-1.25 1.25-.719 0-1.25-.531-1.25-1.25C6.75.812 7.281.25 8 .25c.688 0 1.25.563 1.25 1.25ZM8 13.25c.688 0 1.25.563 1.25 1.25 0 .719-.563 1.25-1.25 1.25-.719 0-1.25-.531-1.25-1.25 0-.688.531-1.25 1.25-1.25ZM15.75 8c0 .719-.563 1.25-1.25 1.25-.719 0-1.25-.531-1.25-1.25 0-.688.531-1.25 1.25-1.25.688 0 1.25.563 1.25 1.25Zm-13 0c0 .719-.563 1.25-1.25 1.25C.781 9.25.25 8.719.25 8c0-.688.531-1.25 1.25-1.25.688 0 1.25.563 1.25 1.25Zm.625-5.844c.719 0 1.25.563 1.25 1.25 0 .719-.531 1.25-1.25 1.25-.688 0-1.25-.531-1.25-1.25 0-.687.563-1.25 1.25-1.25Zm9.219 9.219c.687 0 1.25.531 1.25 1.25 0 .688-.563 1.25-1.25 1.25-.719 0-1.25-.563-1.25-1.25 0-.719.531-1.25 1.25-1.25Zm-9.219 0c.719 0 1.25.531 1.25 1.25 0 .688-.531 1.25-1.25 1.25-.688 0-1.25-.563-1.25-1.25 0-.719.563-1.25 1.25-1.25Z"/></svg>
               <p className="text-preset-7 text-neutral-0">Search in progress...</p>
            </div>
        ): (
        <div className="p-2 bg-neutral-800 border border-neutral-600 rounded-xl" aria-label="Search suggestions">
          <ul className="flex flex-col gap-2" role="listbox">
            {suggestions.map((s, index) => (
                <li
                    key={index}
                    id={`suggestion-${index}`}
                    role="option"
                    aria-selected={index === activeIndex}
                    onMouseEnter={() => setActiveIndex(index)}
                    onMouseLeave={() => setActiveIndex(-1)}
                >
                    <button
                        type="button"
                        className={`text-preset-7 text-neutral-0 w-full rounded-md p-3 text-start cursor-pointer hover:bg-neutral-700 hover:border hover:border-neutral-600 ${index === activeIndex ? 'bg-neutral-700 border border-neutral-600' : ''}`}
                        onClick={() => onSelect(s)}>
                            {s.name}, {s.country}
                    </button>
                </li>
            ))}
          </ul>
        </div>
        )}
    </div>
  )
}

export default CityAutocomplete
