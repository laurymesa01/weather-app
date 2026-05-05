// eslint-disable-next-line no-unused-vars
import React from 'react'
import  Header  from "../components/Header";
import Search from '../components/Search';

const Home = () => {
  return (
    <main className='h-screen w-screen bg-neutral-900 py-2 px-3 xl:px-12 xl:py-8'>
        <Header />
        <section className='mt-12'>
          <h1 className='text-preset-2 text-neutral-0 text-center'>How’s the sky looking today?</h1>
          <Search />
        </section>
    </main>

  )
}

export default Home;