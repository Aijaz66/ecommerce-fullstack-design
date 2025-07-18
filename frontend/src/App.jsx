import React from 'react'

import {  Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import ProductDetails from './pages/ProductDetails'
import Cart from './pages/Cart'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/products' element={<Products/>} />
      <Route path='/productdetails' element={<ProductDetails/>} />
      <Route path='/cart' element={<Cart/>}/>
        
     
    </Routes>
  )
}

export default App