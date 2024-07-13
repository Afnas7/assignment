import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { Route,Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Add from './components/Add'
import Ptable from './components/Ptable'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="app">
     
     
    <h1 id="id1">PRODUCT DATA</h1>
      
      <Navbar/>
      
      <Routes>
        <Route path='/' element={<Ptable/>}> </Route> 
        <Route path='/add' element={<Add/>}> </Route> 
        
      </Routes>
      
      
      </div>
    </>
  )
}

export default App