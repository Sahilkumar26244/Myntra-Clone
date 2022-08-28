import React, { useState } from 'react'
import "../styles/Login.css"
import Home from "./Home"

function Login() {
  const [emaillog,setEmaillog] = useState(" ");
  const [passwordlog,setPasswordlog] = useState(" ");

  const [flag,setFlag] = useState(false);

  const [home,setHome] = useState(true);

  function handleLogin(e) {
    e.preventDefault();
    let pass = localStorage
      .getItem("sanskarPassword")
      .replace(/"/g, "");
      let mail = localStorage.getItem("sanskarEmail").replace(/"/g,"");

      if(!emaillog || !passwordlog) {
        setFlag(true);
        console.log("Empty");
      } else if(passwordlog !== pass || emaillog !== mail ) {
        setFlag(true);
      } else {
        setHome(!home);
        setFlag(false);
      }
  }

  console.log(flag)
  return (
    <>
    {home ? (
      <div className='login' >
      <img src="https://myntra-clone-unitfour.herokuapp.com/static/media/registerbanner.f576f17a0f5548951633.webp" alt="" />
      <h3>LogIn</h3>
      <div className='login__div' >
          <input type="email" onChange={(event) => setEmaillog(event.target.value)} placeholder='Email' />
          <input type="password" onChange={(event)=> setPasswordlog(event.target.value)} placeholder='Password' />
          <button onClick={handleLogin} >Submit</button>
      </div>

  </div> 
    ):(
      <Home/>
    )}
    
    </>
    
  )
}

export default Login