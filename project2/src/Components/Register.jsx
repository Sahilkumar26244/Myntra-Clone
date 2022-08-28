import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "../styles/Register.css"
import Login from "./Login"

function Register() {

  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [phone,setPhone] = useState("");
  const [password,setPassword] = useState("");

  const [flag,setFlag] = useState(false);
  const [login,setLogin] = useState(true);

  function handleFormSubmit(e) {
    e.preventDefault();

    if (!name || !email || !password || !phone ) {
      setFlag(true);
    } else {
      setFlag(false);
      localStorage.setItem("sanskarEmail", JSON.stringify(email));
      localStorage.setItem(
        "sanskarPassword",
        JSON.stringify(password)
      );
      console.log("Saved in Local Storage");

      setLogin(!login);
    }
  }

  console.log(flag)


  // function handleClick() {
  //   setLogin(!login);
  // }

  return (
    <>
    {" "}
    {login ? (
      <div>
          <div className='register' >
            <h3>REGISTER</h3>
            <div className='register__div' >
                <input type="text" name="name" onChange={(event)=> setName(event.target.value)} placeholder='Username' />
                <input type="email" onChange={(event)=> setEmail(event.target.value)} placeholder='Email' />
                <input type="Phone" onChange={(event)=> setPhone(event.target.value)} placeholder='Mobile Number' />
                <input type="password" onChange={(event)=> setPassword(event.target.value)} placeholder='Password' />
                <input type="password" onChange={(event)=> setPassword(event.target.value)}  placeholder='Confirm Password' />
                <button onClick={handleFormSubmit} >SUBMIT</button>

            </div>
      
            <p>Already having Account Please <Link to="/login" >LogIn</Link> </p>
          </div>
      </div>
      
    ): (
      <Login/>
    )}
    
    </>
    
  )
}

export default Register