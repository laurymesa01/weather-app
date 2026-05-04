// eslint-disable-next-line no-unused-vars
import React from 'react'
import  Header  from "../components/Header";

const Home = () => {
  return (
    <main className='h-screen w-screen bg-neutral-900 py-2 px-4 xl:px-12 xl:py-8'>
        <Header />
        <section >
          <h1>How’s the sky looking today?</h1>
        </section>
    </main>

  )
}

export default Home;