import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/Login.css"

const Login = () => {
  return (
    <div className='login'>
        <div className='login-img'></div>
        <div className='login-content'>
          <div className='login-logo'></div>
          <div className='log-in-txt'>login</div>
          <div className='login-input-box'>
            {/* <div className='login-label'>email</div> */}
            <input type="email" className='login-input' placeholder='Email'/>
          </div>
          <div className='login-input-box'>
            {/* <div className='login-label'>password</div> */}
            <input type="password" className='login-input' placeholder='Password'/>
          </div>
          <div className='login-btn'>login</div>
          <div className='login-q'>Don't have an account? 
            <Link className='reg-txt' to="/register">register</Link>
          </div>
        </div>
    </div>
  )
}

export default Login