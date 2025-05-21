import { useState } from 'react'

function Navbar() {
  const [count, setCount] = useState(0)


  return (
    <>
      <nav className="navbar">
        <div className="links">
          <a id="link" href="/">Start</a>
          <a id="link" href="/create">About</a>
        </div>
      </nav>
    </>
  )
}

export default Navbar;
