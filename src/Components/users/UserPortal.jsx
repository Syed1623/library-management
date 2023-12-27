import React from 'react'
import Navbar from '../Navbar'
import HomePage from '../HomePage'
import BooksPage from '../BooksPage'
import {Routes,Route} from 'react-router-dom'
const UserPortal = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/books' element={<BooksPage/>}></Route>
      </Routes>
    </div>
  )
}

export default UserPortal
