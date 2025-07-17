import './NavBar.css';
import { useState } from 'react'
import Register from './Register'
import { render, createPortal } from 'react-dom'

function Navbar() {
  const [count, setCount] = useState(0)
  const [logInState, SetLoggedin] = useState(null)
  const [showReg, setShowReg] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="links">
          <a id="link" href="/">Home</a>
          <a id="link" href="/about">About</a>
        </div>
        <div className="loginLinks">
          <button onClick={() => setShowReg(true)} >
            Login
          </button>
          <button id="link">Sign Up</button>
          {showReg && createPortal(
            <Register onClose={() => setShowReg(false)} />, document.getElementById("portal-login"))}
        </div>
      </nav>
    </>
  )
}

export default Navbar;
