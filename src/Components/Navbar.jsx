import React from 'react'
import { Link,useLocation } from 'react-router-dom'
import '../style/Navbar.css'
const Navbar = () => {
  const location = useLocation()
  console.log(location)
  const isAdminPortal = location.pathname.includes("/adminPortal")
  return (
    <div className='navbar flex-row container-md p-1'>
      <div className='logo'>
          <h1>BOOK HUB</h1>
      </div>
      <div className="link">
        {isAdminPortal? 
        <Link className='links' to='/adminPortal/'>Home</Link>
        :
        <Link className='links' to='/userPortal/'>Home</Link>}
        {isAdminPortal? 
        <Link className='links' to='/adminPortal/books'>Books</Link>
        :
        <Link className='links' to='/userPortal/books'>Books</Link>}
        {isAdminPortal&& <Link className='links' to='/adminPortal/users'>Users</Link>}
        {isAdminPortal&& <Link className='links' to='/adminPortal/addbooks'>Add Books</Link>}
        {isAdminPortal&& <Link className='links' to='/adminPortal/addusers'>Add users</Link>}
        {isAdminPortal? 
          <Link className='links' to='/adminlogin'>Logout</Link>
          :
          <Link className='links' to='/userLogin'>Logout</Link>}
      </div>
    </div>
  )
}

export default Navbar
