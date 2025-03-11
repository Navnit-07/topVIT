import { useState } from 'react'
import './App.css'
import Navbar from './layouts/Navbar'
import MainLayout from './layouts/MainLayout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Navbar/>
        <MainLayout/>
      </div>
    </>
  )
}

export default App
