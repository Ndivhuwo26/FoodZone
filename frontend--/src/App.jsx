import React from 'react'
import Navbar from './componets/Navbar/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Cart from './pages/Cart/Cart'
import Checkout from './pages/Checkout/Checkout'
import Order from './pages/Order/Order'
import Footer from './componets/Footer/Footer'

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} /> 
        <Route path="/order" element={<Order />} />    
      </Routes>
      <Footer />
    </div>
  )
}

export default App