import React from 'react'
import { Link } from 'react-router-dom'
import '../style/landingPage.css'
const LandingPage = () => {
  return (
    <div className='landingPage'>
      <h1>BOOK HUB</h1>
      <div className="loginOption">
          <Link className='link' to="/adminLogin">Admin Login</Link>
          <Link className='link' to="/userLogin">User Login</Link>
      </div>
    </div>
  )
}

export default LandingPage
