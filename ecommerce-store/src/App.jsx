import React from 'react'
import HomePage from './Pages/HomePage'
import CheckoutPage from './Pages/CheckoutPage'
import OrdersPage from './Pages/OrdersPage'
import { Routes, Route, Link } from 'react-router-dom'

const App = () => {
  return (
    <div>
        <Routes>
          <Route index element={<HomePage />} /> 
          <Route path="/checkout" element={<CheckoutPage/>} />
          <Route path="/orders" element={<OrdersPage />} />
        </Routes>
    </div>
  )
}

export default App