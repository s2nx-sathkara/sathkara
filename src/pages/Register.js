import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className='login'>
        <div className='login-img'></div>
        <div className='login-content'>
          <div className='login-logo'></div>
          <div className='log-in-txt'>register</div>
          <div className='login-input-box'>
            {/* <div className='login-label'>email</div> */}
            <input type="email" className='login-input' placeholder='Display Name'/>
          </div>
          <div className='login-input-box'>
            {/* <div className='login-label'>email</div> */}
            <input type="email" className='login-input' placeholder='Email'/>
          </div>
          <div className='login-input-box'>
            {/* <div className='login-label'>password</div> */}
            <input type="password" className='login-input' placeholder='Password'/>
          </div>
          <div className='login-input-box'>
            {/* <div className='login-label'>password</div> */}
            <input type="password" className='login-input' placeholder='Confirm password'/>
          </div>
          <div className='login-btn'>register</div>
          <div className='login-q'>Do you already have an account? 
            <Link className='reg-txt' to="/register">login</Link>
          </div>
        </div>
    </div>
  )
}

export default Register