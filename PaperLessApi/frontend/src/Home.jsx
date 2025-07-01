import './Home.css';
import dragonImg from './assets/pic.png';
function Home() {


  const title = "Paperless DnD";
  return (
    <div className="home-page">
      <h1 class="typewriter">{title}</h1>


      {/* <div> */}
      <img src={dragonImg} className="logo" />
      {/* </div> */}
      <a href="/SheetsnTraits">
        <button>Start</button>
      </a>
    </div>
  )
}

export default Home;
