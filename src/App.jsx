import { useState } from 'react'
import './App.css'
import HomePage from './Pages/HomePage'
import { Routes, Route, useLocation } from 'react-router-dom'
import PantissSdgPage from './Pages/PantissSdgPage'
import Header from './Components/Common/Header'
import Footer from './Components/Common/Footer'
import AbiutPage from './Pages/AbiutPage'


function App() {
  const location = useLocation();

  const hideHeaderFooter = location.pathname === '/sdg-pantiss';


  return (
    <>
      {!hideHeaderFooter && <Header />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sdg-pantiss" element={<PantissSdgPage />} />
        <Route path="/whoweare/*" element={<AbiutPage />} />
      </Routes>
      {!hideHeaderFooter && <Footer />}
    </>
  )
}

export default App
