import React from 'react'
import HomePage from './Pages/HomePage'
import { Routes, Route, Link } from 'react-router-dom'

const App = () => {
  return (
    <div>
        <Routes>
          <Route index element={<HomePage />} /> 
          <Route path="/checkout" element={<div>CheckOut</div>} />
        </Routes>
    </div>
  )
}

export default App