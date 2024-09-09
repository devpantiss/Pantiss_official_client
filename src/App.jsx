import { useState } from 'react'
import './App.css'
import HomePage from './Pages/HomePage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import PantissSdgPage from './Pages/PantissSdgPage'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sdg-pantiss" element={<PantissSdgPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
