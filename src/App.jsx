import './App.css'
import Navbar from './layouts/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './layouts/Footer'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <>
      <div>
        <ScrollToTop/>
        <Navbar/>
        <Outlet/>
        <Footer/>
      </div>
    </>
  )
}

export default App
