// eslint-disable-next-line no-unused-vars
import React from 'react'
import Search from '../components/Search';
// eslint-disable-next-line no-unused-vars
import WeatherResults from '../components/WeatherResults';
import Skeleton from '../components/Skeleton';

const Home = () => {
  return (
        <section className='mt-12'>
          <h1 className='text-preset-2 text-neutral-0 text-center'>How’s the sky looking today?</h1>
          <Search />
          <Skeleton />
        </section>

  )
}

export default Home;