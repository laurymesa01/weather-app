import { useContext } from 'react'
import { WeatherContext } from '../context/WeatherContext'

const DEFAULT_MESSAGE = "We couldn’t connect to the server (API error). Please try again in a few moments."

const Error = ({ message = DEFAULT_MESSAGE, onRetry }) => {
  const { retry } = useContext(WeatherContext)
  const handleRetry = onRetry ?? retry

  return (
    <div role="alert" className="flex flex-col items-center text-center gap-4 mt-20">
        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 18 18">
            <path fill="#ACACB7" d="M9 .531c4.781 0 8.719 3.938 8.719 8.719 0 4.816-3.938 8.719-8.719 8.719A8.717 8.717 0 0 1 .281 9.25C.281 4.469 4.184.531 9 .531Zm4.957 3.762c-2.566-2.566-6.574-2.707-9.316-.563l9.879 9.88c2.144-2.743 2.003-6.75-.563-9.317Zm-9.95 9.95c2.567 2.566 6.575 2.706 9.317.562l-9.879-9.88c-2.144 2.743-2.004 6.75.563 9.317Z"/>
        </svg>
        <h1 className="text-preset-2 text-neutral-0">Something went wrong</h1>
        <p className="text-preset-5-medium text-neutral-200">{message}</p>
        <button onClick={handleRetry} className="bg-neutral-800 rounded-lg p-3 flex flex-row gap-2 cursor-pointer">
            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="16" height="17" fill="none" viewBox="0 0 16 17">
                <path fill="#fff" d="M15.094 1.406c.25-.25.656-.062.656.25v4.469a.38.38 0 0 1-.375.375h-4.5a.36.36 0 0 1-.25-.625l1.688-1.688A5.992 5.992 0 0 0 8 2.375a6.134 6.134 0 0 0-6.125 5.781c-.031.219-.188.344-.375.344H.625c-.219 0-.406-.156-.375-.375C.438 4.031 3.844.75 8 .75c2.125 0 4.063.875 5.469 2.281l1.625-1.625Zm.25 7.094c.219 0 .406.188.375.406C15.53 13 12.125 16.25 8 16.25c-2.156 0-4.094-.844-5.5-2.25L.875 15.625a.36.36 0 0 1-.625-.25v-4.5a.38.38 0 0 1 .375-.375h4.469c.312 0 .5.406.25.656l-1.688 1.688C4.75 13.969 6.281 14.625 8 14.625a6.1 6.1 0 0 0 6.094-5.75c.031-.219.187-.375.375-.375h.875Z"/>
            </svg>
            Retry
        </button>
    </div>
  )
}

export default Error
