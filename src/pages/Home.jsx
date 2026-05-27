import { useContext } from 'react'
import Search from '../components/Search';
import WeatherResults from '../components/WeatherResults';
import Skeleton from '../components/Skeleton';
import { WeatherContext } from '../context/WeatherContext';

const Home = () => {
  const { state } = useContext(WeatherContext);


  return (
    <section className="mt-12">
      <h1 className="text-preset-2 text-neutral-0 text-center">How&apos;s the sky looking today?</h1>
      <Search />
      <div aria-live="polite" aria-atomic="true">
        {state === 'idle' && (
          <p className="w-full text-preset-4 text-neutral-0 text-center mt-8">Search for a city to get the weather forecast!</p>
        )}
        {state === 'notfound' && (
          <p className="w-full text-preset-4 text-neutral-0 text-center mt-4">No search result found!</p>
        )}
      </div>
      {state === 'success' && <WeatherResults />}
      {(state === 'loading' || state === 'locating') && <Skeleton />}
    </section>
  )
}

export default Home;
