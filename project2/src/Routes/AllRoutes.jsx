import React from 'react'
import { Routes , Route } from 'react-router-dom'
import Address from '../Components/Cart/Address'
import Cart from '../Components/Cart/Cart'
import Payment from '../Components/Cart/Payment'
import Home from "../Components/Home"
import Login from '../Components/Login'
import MenPage from '../Components/MenPage'
import Register from '../Components/Register'
import SingleMenPage from '../Components/SingleMenPage'
import SingleWomenPage from '../Components/SingleWomenPage'
import WomenPage from '../Components/WomenPage'

function AllRoutes() {
  return (
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/login' element={<Login/>} />
        <Route path="/menPage" element={<MenPage/>} />
        <Route path="/singleMenPage/:id" element={<SingleMenPage/>} />
        <Route path='/womenPage' element={<WomenPage/>} />
        <Route path="/singleWomenPage/:id" element={<SingleWomenPage/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path='/address' element={<Address/>} />
        <Route path='/payment' element={<Payment/>} />
        
    </Routes>
  )
}

export default AllRoutes