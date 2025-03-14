import './App.css'
import Navbar from './layouts/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './layouts/Footer'

function App() {
  return (
    <>
      <div>
        <Navbar/>
        <Outlet/>
        <Footer/>
      </div>
    </>
  )
}

export default App
