import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/home/Home'
import Navbar from '../components/navbar/Navbar'
import Cart from '../pages/cart/Cart'
import PlaceOrder from '../pages/place order/PlaceOrder'
import Error from '../pages/error/Error'
import Footer from '../components/footer/Footer'
import LoginPopup from '../components/loginpopup/LoginPopup'
import Search from '../components/searchbar/Search'


const Index = () => {

  const [showLogin, setShowLogin] = useState(false)


  return (

    < BrowserRouter >


      {showSearch ? <Search setShowSearch={setShowSearch} /> : <></>}

      <Navbar setShowLogin={setShowLogin} setShowSearch={setShowSearch} />

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