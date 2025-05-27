import { useState } from 'react'
import dragonImg from './assets/dragon_1016757.png'
function Home() {
  const [count, setCount] = useState(0)

  const title = "Paperless DnD";
  return (
    <>
      <div className="home-page">
        <h1>{title}</h1>
        <div>
          <img src={dragonImg} className="logo" />
        </div>
        <button>Start</button>
      </div>
    </>
  )
}

export default Home;
