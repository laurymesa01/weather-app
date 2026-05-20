// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react'
import Search from '../components/Search';
import WeatherResults from '../components/WeatherResults';
import Skeleton from '../components/Skeleton';
import { WeatherContext } from '../context/WeatherContext';

const Home = () => {
  const { isLocating, weather } = useContext(WeatherContext);

  return (
    <section className='mt-12'>
      <h1 className='text-preset-2 text-neutral-0 text-center'>How's the sky looking today?</h1>
      <Search />
      {!isLocating && weather ? <WeatherResults /> : <Skeleton />}
    </section>
  )
}

export default Home;
