import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/home/Home'
import Navbar from '../components/navbar/Navbar'
import Cart from '../pages/cart/Cart'
import PlaceOrder from '../pages/place order/PlaceOrder'
import Error from '../pages/error/Error'
import Footer from '../components/footer/Footer'
import LoginPopup from '../components/loginpopup/LoginPopup'


const Index = () => {

  const [showLogin, setShowLogin] = useState(false)

  return (

    < BrowserRouter >

      {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}

      <Navbar setShowLogin={setShowLogin} />

      <Routes>

        <Route path='/' element={<Home />} />

        <Route path='/cart' element={<Cart />} />

        <Route path='/placeorder' element={<PlaceOrder />} />

        <Route path='*' element={<Error />} />

      </Routes>
      <Footer />
    </BrowserRouter >

  )
}

export default Index