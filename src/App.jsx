import './App.css'
import { WeatherProvider } from './context/WeatherProvider';
import Layout from './pages/Layout';


function App() {

  return (
    <WeatherProvider >
      <Layout/>
    </WeatherProvider>
      
  )
}

export default App
