import { Routes, Route } from 'react-router';
import './App.css'
import HomePage from './pages/HomePage'


function App() {

  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="checkout" element={<div>checkout page test</div>} />
    </Routes>
    
  )
}

export default App
