/* eslint-disable no-unused-vars */
import React from 'react'
import Header from '../components/Header'
import Home from './Home'

const Layout = () => {
  return (
    <main className='min-h-screen w-screen bg-neutral-900 py-2 px-3 xl:px-12 xl:py-8'>
        <Header/>
        <Home/>
    </main>
  )
}

export default Layout