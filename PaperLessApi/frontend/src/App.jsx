import { useState } from 'react'
import reactLogo from './assets/react.svg'
import dragonImg from './assets/dragon_1016757.png'
import './App.css'
//import Dropdown from 'react-bootstrap/Dropdown'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <img src={dragonImg} className="logo" alt="DragonLogo" />
      </div>
      <h4>PaperLess DnD</h4>
      <button>
        Start
      </button>
      <div>

      </div>
    </>
  )
}

export default App
