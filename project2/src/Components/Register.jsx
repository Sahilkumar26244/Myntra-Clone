import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/Register.css"


function Register() {
  return (
    <div className='register' >
        <h3>REGISTER</h3>
        <div className='register__div' >
            <input placeholder='Username' />
            <input placeholder='Email' />
            <input placeholder='Mobile Number' />
            <input placeholder='Password' />
            <input placeholder='Confirm Password' />
            <button>SUBMIT</button>

        </div>
        <p>Already having Account Please <Link to="/login" >LogIn</Link> </p>
    </div>
  )
}

export default Register