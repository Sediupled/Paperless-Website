import { useEffect, useState } from 'react'
import dragonImg from './assets/dragon_1016757.png'
function Home() {


  const title = "Paperless DnD";
  return (
    <>
      <div className="home-page">
        <h1>{title}</h1>
        <div>
          <img src={dragonImg} className="logo" />
        </div>
        <a href="/SheetsnTraits">
          <button>Start</button>
        </a>
      </div>
    </>
  )
}

export default Home;
