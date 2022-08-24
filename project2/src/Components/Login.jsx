import React from 'react'
import "../styles/Login.css"

function Login() {
  return (
    <div className='login' >
        <img src="https://myntra-clone-unitfour.herokuapp.com/static/media/registerbanner.f576f17a0f5548951633.webp" alt="" />
        <h3>LogIn</h3>
        <div className='login__div' >
            <input placeholder='Email' />
            <input placeholder='Password' />
            <button>Submit</button>
        </div>

    </div>
  )
}

export default Login