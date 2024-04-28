import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/home/Home'
import Navbar from '../components/navbar/Navbar'
import Cart from '../pages/cart/Cart'
import PlaceOrder from '../pages/place order/PlaceOrder'
import Error from '../pages/error/Error'

const Index = () => {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>

        <Route path='/' element={<Home />} />

        <Route path='/cart' element={<Cart />} />

        <Route path='/placeorder' element={<PlaceOrder />} />

        <Route path='*' element={<Error />} />

      </Routes>
    </BrowserRouter >

  )
}

export default Index