import React, { useState } from 'react'
import { Link, useNavigate} from 'react-router-dom'
import { signInUser } from '../services/config';
import "../styles/Login.css"

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const navigate = useNavigate();

  const _signInUser = async (email, password) => {
    if(email && password) {
      let signedIn = await signInUser({uMail:email, uPassword: password});
      console.log(signedIn)
      if(signedIn) {
        localStorage.setItem("logged_in", "1");
        localStorage.setItem("uId", signedIn.message._id)
        navigate('/');
      } else {
        alert("Invalid credentials");
      }
    } else {
      alert("Invalid credentials");
    }
  }

  return (
    <div className='login'>
        <div className='login-img'></div>
        <div className='login-content'>
          <div className='login-logo'></div>
          <div className='log-in-txt'>login</div>
          <div className='login-input-box'>
            {/* <div className='login-label'>email</div> */}
            <input type="email" className='login-input' placeholder='Email' onChange={(e)=>{
              setEmail(e.target.value);
            }}/>
          </div>
          <div className='login-input-box'>
            {/* <div className='login-label'>password</div> */}
            <input type="password" className='login-input' placeholder='Password' onChange={(e)=>{
              setPassword(e.target.value);
            }}/>
          </div>
          <div className='login-btn' onClick={()=>{
            _signInUser(email, password);
          }}>login</div>
          <div className='login-q'>Don't have an account? 
            <Link className='reg-txt' to="/register">register</Link>
          </div>
        </div>
    </div>
  )
}

export default Login