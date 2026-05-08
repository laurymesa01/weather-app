import './App.css'
// eslint-disable-next-line no-unused-vars
import Home from './pages/Home'
// eslint-disable-next-line no-unused-vars
import Error from './pages/Error'
import  Header  from "./components/Header";


function App() {

  return (
    <main className='min-h-screen w-screen bg-neutral-900 py-2 px-3 xl:px-12 xl:py-8'>
      <Header/>
      <Home/>

    </main>
      
  )
}

export default App
