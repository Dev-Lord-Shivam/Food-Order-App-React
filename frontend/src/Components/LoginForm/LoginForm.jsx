import React, { useState } from 'react'
import './LoginForm.css'
import { assets } from '../../assets/assets';
const LoginForm = ({setShowLogin}) => {
  
    const [currState,setCurrState] = useState("Login");

  return (
   
    <div className='login-popup'>
       <form className="login-popup-container">
         <div className="login-popup-titile d-flex justify-content-between align-items-center text-black">
            <h2>{currState}</h2>
            <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
         </div>
         <div className="login-popup-input d-flex flex-column gap-3">
            {currState === "Login"?<></>:<input type='text' className='form-control' placeholder='your name' required />}
            <input type='text' className='form-control' placeholder='your Email' required />
            <input type='password' className='form-control' placeholder='your password' required />
         </div>
         <button>{currState === "Login"?"Login":"create account"}</button>
         <div className="login-popup-condition">
            <input type="checkbox" required />
            <p>by continue i agree the term of use & privacy policy.</p>
         </div>
         {currState === "Login"?
            <p>create a new account? <span onClick={()=>setCurrState("Sign Up")}> click here</span></p>:
            <p>Already have an account? <span onClick={()=>setCurrState("Login")}> login here</span></p>
         }
        
         
       </form>
    </div>
  )
}

export default LoginForm
