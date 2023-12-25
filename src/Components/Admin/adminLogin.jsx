import React, { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import "../../style/adminLogin.css"
const AdminLogin = () => {
    const navigate = useNavigate()
    const ipEmail = useRef()
    const ipPassword = useRef()

    const handleSubmit = (e) =>{
        e.preventDefault()
        let admin = {
            email:"admin@gmail.com",
            password:12345
        }
        if(ipEmail.current.value == admin.email && ipPassword.current.value == admin.password){
            // console.log("logged in successfully")
            navigate('/adminPortal')
        }else{
            alert("invalid admin credentials")
        }
    }

    useEffect(()=>{
        ipEmail.current.focus()
    },[])
  return (
    <div className='adminLogin'>
      <h1>Admin Login</h1>
      <div className="adminForm">
        <form action="" onSubmit={handleSubmit}>
            <div className="adminEmail">
                <input className='' type="email"  placeholder='Enter your email' ref={ipEmail}/>
            </div>
            <div className="adminPassword">
                <input className='' type="password" placeholder='Enter your password' ref={ipPassword}/>
            </div>
            <div className="loginBtn">
                <button className=''>Login</button>
            </div>
        </form>
      </div>
    </div>
  )
}

export default AdminLogin
