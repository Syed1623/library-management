import React from 'react'
import '../../style/adminPortal.css'
import Navbar from '../Navbar'
import HomePage from '../HomePage'
import BooksPage from '../BooksPage'
import Users from '../Admin/Users'
import AddBooks from '../Admin/AddBooks'
import AddUsers from '../Admin/AddUsers'
import { Routes, Route } from "react-router-dom";
const AdminPortal = () => {
  return (
    <div className='adminPortal'>
      <h1>welcome to Admin Portal</h1>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/books" element={<BooksPage />} />
        <Route path="/users" element={<Users />} />
        <Route path="/addbooks" element={<AddBooks />} />
        <Route path="/addusers" element={<AddUsers />} />
      </Routes>
    </div>
  )
}

export default AdminPortal
