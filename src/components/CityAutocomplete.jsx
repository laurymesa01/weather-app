/* eslint-disable no-unused-vars */
import React from 'react'

const CityAutocomplete = ({suggestions, onSelect}) => {

  return (
    <div id="dropdown" className="z-10 w-full absolute top-full left-0 mt-2">
        <div className="p-2 bg-neutral-800 border border-neutral-600 rounded-xl" aria-labelledby="dropdownDefaultButton">
          <ul className='flex flex-col gap-2'>
            {suggestions.map((s, index) => (
                <li key={index} className=''>
                    <button
                        type="button"
                        className="text-preset-7 text-neutral-0 w-full rounded-md p-3 text-start cursor-pointer hover:bg-neutral-700 hover:border hover:border-neutral-600"
                        onClick={() => onSelect(s)}>
                            {s.name}, {s.country}
                    </button>
                </li>
            ))}
          </ul>

        </div>
    </div>
  )
}

export default CityAutocomplete