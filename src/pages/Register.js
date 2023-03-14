import React, { useState } from 'react'
import { Link, useNavigate} from 'react-router-dom'
import { signUpUser } from '../services/config';


const Register = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [cPassword, setCPassword] = useState();
  const [city, setCity] = useState();

  const navigate = useNavigate();

  const _signUpUser = async (name, email, password, cPassword, city) => {
    if(name && email && password && cPassword && city) {
        let signedUp = await signUpUser({
          uName: name, 
          uEmail:email, 
          uPassword:password, 
          uPasswordconfirm: cPassword, 
          uCity:city});

        console.log(signedUp);
        if(signedUp) {
          localStorage.setItem("logged_in", "1");
          localStorage.setItem("uId", signedUp.result._id)
          navigate('/');
        } else {
          alert('Invalid inputs');
        }
    } else {
      alert("Invalid inputs");
    }
  }

  return (
    <div className='login'>
        <div className='login-img reg-img'></div>
        <div className='login-content'>
          <div className='login-logo'></div>
          <div className='log-in-txt'>register</div>
          <div className='login-input-box'>
            {/* <div className='login-label'>email</div> */}
            <input type="email" className='login-input' placeholder='Display Name' onChange={
              (e)=>{
                setName(e.target.value)
              }}
            />
          </div>
          <div className='login-input-box'>
            {/* <div className='login-label'>email</div> */}
            <input type="email" className='login-input' placeholder='Email' onChange={
              (e)=>{
                setEmail(e.target.value)
              }}/>
          </div>
          <div className='login-input-box'>
            {/* <div className='login-label'>password</div> */}
            <input type="password" className='login-input' placeholder='Password' onChange={
              (e)=>{
                setPassword(e.target.value)
              }}/>
          </div>
          <div className='login-input-box'>
            {/* <div className='login-label'>password</div> */}
            <input type="password" className='login-input' placeholder='Confirm password' onChange={
              (e)=>{
                setCPassword(e.target.value)
              }}/>
          </div>
          <div className='login-input-box'>
            {/* <div className='login-label'>password</div> */}
            <input type="text" className='anp-input' placeholder='City' onChange={
              (e)=>{
                setCity(e.target.value)
              }}/>
          </div>            
          <div className='login-btn' onClick={() => {
            _signUpUser(name, email, password, cPassword, city);
          }}>register</div>
          <div className='login-q'>Do you already have an account? 
            <Link className='reg-txt' to="/login">login</Link>
          </div>
        </div>
    </div>
  )
}

export default Register