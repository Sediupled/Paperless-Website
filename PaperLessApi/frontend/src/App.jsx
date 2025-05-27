import { useState } from 'react'
import './App.css'
import Navbar from './Navbar'
import Home from './Home'
import About from './About'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {

  return (
    <>
      <Router>
        <div className="App">
          <Navbar />
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </div>
        </div>
      </Router>
    </>
  )
}

export default App
