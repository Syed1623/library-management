import React from 'react'
import { Link } from 'react-router-dom'
import '../style/Navbar.css'
const Navbar = () => {
  return (
    <div className='navbar flex-row container-md p-1'>
      <div className='logo'>
          <h1>BOOK HUB</h1>
      </div>
      <div className="link">
        <Link className='links' to='/adminportal/'>Home</Link>
        <Link className='links' to='/adminportal/books'>Books</Link>
        <Link className='links' to='/adminportal/users'>Users</Link>
        <Link className='links' to='/adminportal/addbooks'>Add Books</Link>
        <Link className='links' to='/adminportal/addusers'>Add users</Link>
        <Link className='links' to='/adminlogin'>Logout</Link>
      </div>
    </div>
  )
}

export default Navbar
