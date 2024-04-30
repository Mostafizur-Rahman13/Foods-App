import React, { useState } from 'react'
import './LoginPopup.css'
import { current } from '@reduxjs/toolkit'
import { assets } from '../../assets/assets'

const LoginPopup = ({ setShowLogin }) => {

  const [currState, setCurrState] = useState("Login")

  return (
    <div className='login-popup'>

      <form className='login-popup-container'>

        <div className="login-popup-title">

          <h2>{currState}</h2>

          <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" />

        </div>

        <div className="login-popup-inputs">

          {currState === "Login" ? <></> : <input type="text" placeholder='Your name' required />}

          <input type="text" placeholder='Email' required />
          <input type="text" placeholder='Password' required />
        </div>

        <button>{currState === "Sign up" ? "Create account" : "Login"}</button>

        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing, i agree to the terms of use & privacey policy</p>
        </div>

        {currState === "Login" ? <p>Create a new account ? <span onClick={() => { setCurrState("Sign up") }}>Click here</span></p> : <p>Already have an account ? <span onClick={() => { setCurrState("Login") }}>Login here</span></p>}


      </form>

    </div>
  )
}

export default LoginPopup