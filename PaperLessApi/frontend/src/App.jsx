import { useState } from 'react'
import './App.css'
import Navbar from './Navbar'
import Home from './Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="App">
        <Navbar />
        <div className="content">
          <Home />
        </div>
      </div>
    </>
  )
}

export default App
