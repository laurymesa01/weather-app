/* eslint-disable no-unused-vars */
import React, {useContext} from 'react'
import Header from '../components/Header'
import Home from './Home'
import Error from './Error'


import { WeatherContext } from '../context/WeatherContext';


const Layout = () => {
    const { state } = useContext(WeatherContext);
  
  return (
    <main className='min-h-screen w-screen bg-neutral-900 py-2 px-3 xl:px-12 xl:py-8'>
        <Header/>
        {state  === 'error' ? <Error /> : 
        <Home/>}
    </main>
  )
}

export default Layout