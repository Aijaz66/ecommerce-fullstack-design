import React from 'react'

import {  Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import ProductDetails from './pages/ProductDetails'
import Cart from './pages/Cart'
import Register from './pages/Register'
import Login from './pages/Login'


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/products' element={<Products/>} />
      <Route path='/productdetails' element={<ProductDetails/>} />
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
        
     
    </Routes>
  )
}

export default App