import { useState } from 'react'
import './App.css'
import HomePage from './Pages/HomePage'
import { Routes, Route, useLocation } from 'react-router-dom'
import PantissSdgPage from './Pages/PantissSdgPage'
import Header from './Components/Common/Header'
import AbiutPage from './Pages/AbiutPage'
import Footer2 from './Components/Common/Footer2'
import CareersPage from './Pages/CareersPage'


function App() {
  const location = useLocation();

  const hideHeaderFooter = location.pathname === '/sdg-pantiss';


  return (
    <div className='overflow-hidden'>
      {!hideHeaderFooter && <Header />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sdg-pantiss" element={<PantissSdgPage />} />
        <Route path="/whoweare/*" element={<AbiutPage />} />
        <Route path="/careers" element={<CareersPage />} />
      </Routes>
      {!hideHeaderFooter && <Footer2 />}
    </div>
  )
}

export default App
