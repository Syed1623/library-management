import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import '../../style/UserLogin.css'
const UserLogin = () => {
  const UserEmail = useRef()
  const UserPassword = useRef()

  useEffect(()=>{
    UserEmail.current.focus()
  },[])
  return (
    <div className="userLogin justify-content-center text-center">
      <h1>User Login</h1>
      <div className="loginForm container-md w-25 p-4 shadow-lg">
        <div className="userInput m-3">
          <input
            className="form-control"
            type="text"
            ref={UserEmail}
            placeholder="Enter Your email"
          />
        </div>
        <div className="userInput m-3">
          <input
            className="form-control"
            type="password"
            ref={UserPassword}
            placeholder="Enter Your Password"
          />
        </div>
        <div className="userSubmit btn btn-primary">
          <Link to="/userPortal/">Login</Link>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;
