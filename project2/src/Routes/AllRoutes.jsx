import React from 'react'
import { Routes , Route } from 'react-router-dom'
import Home from "../Components/Home"
import Login from '../Components/Login'
import Register from '../Components/Register'

function AllRoutes() {
  return (
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/login' element={<Login/>} />
    </Routes>
  )
}

export default AllRoutes