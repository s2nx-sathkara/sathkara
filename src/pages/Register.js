import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className='login'>
        <div className='login-img reg-img'></div>
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
          <div className='anp-input-box'>
                    <div className='anp-select-box'>
                        <select className='anp-select'>
                            <option value=''>Province</option>
                            <option value='western'>western</option>
                            <option value='uva'>uva</option>
                            <option value='southern'>southern</option>
                        </select>
                        <select className='anp-select'>
                            <option value=''>Dristrict</option>
                            <option value='western'>Colombo</option>
                            <option value='uva'>Gampaha</option>
                            <option value='southern'>kalutara</option>
                        </select>
                        <input type="text" className='anp-input' placeholder='City'/>
                    </div>
                </div>
          <div className='login-btn'>register</div>
          <div className='login-q'>Do you already have an account? 
            <Link className='reg-txt' to="/login">login</Link>
          </div>
        </div>
    </div>
  )
}

export default Register