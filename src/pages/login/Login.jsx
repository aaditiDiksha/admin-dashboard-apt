import React from 'react'
import "./login.scss"
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className='login'>
     
        <h2 className="title">
         Admin Login
        </h2>
      <form action="" >
        <div className="formInput">
        <input type="email" placeholder='Email' />
        </div>
        <div className="formInput">
        <input type="password" placeholder='Password' />
        </div>
        <Link to="/home" style={{ textDecoration: "none" }}>

        <button>Log In</button>
        </Link>
      </form>
    </div>
  )
}

export default Login