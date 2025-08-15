import React from 'react'
import HomePage from './Pages/HomePage'
import CheckoutPage from './Pages/CheckoutPage'
import { Routes, Route, Link } from 'react-router-dom'

const App = () => {
  return (
    <div>
        <Routes>
          <Route index element={<HomePage />} /> 
          <Route path="/checkout" element={<CheckoutPage/>} />
        </Routes>
    </div>
  )
}

export default App