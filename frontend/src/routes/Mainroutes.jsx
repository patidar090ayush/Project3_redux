import React from 'react'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Home from "../pages/Home"
import Login from "../pages/Login"
import Register from "../pages/Register"
import Products from '../pages/products'
import Cart from '../pages/Cart'


const Mainroutes = () => {
  return <Routes>
     <Route path="/" element={<Home/>}/>
     <Route path="/products" element={<Products/>}/>
     <Route path="/login" element={<Login/>}/>
     <Route path="/register" element={<Register/>}/>
     <Route path="/Cart" element={<Cart/>}/>
     
  </Routes>
  
}

export default Mainroutes