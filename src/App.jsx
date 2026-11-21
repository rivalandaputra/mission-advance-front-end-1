// ========================================
// 1. IMPORT
// Mengimpor komponen routing dan halaman aplikasi.
// ========================================

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'
import Home from './components/Home'


// ========================================
// 2. KOMPONEN APP
// Mengatur navigasi antarhalaman menggunakan React Router.
// ========================================

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>

        {/* Halaman Login */}
        <Route path="/" element={<Login />} />

        {/* Halaman Register */}
        <Route path="/register" element={<Register />} />

        {/* Halaman Home */}
        <Route path="/home" element={<Home />} />

      </Routes>
    </BrowserRouter>
  )
}


// ========================================
// 3. EXPORT KOMPONEN
// Agar komponen App bisa digunakan oleh main.jsx.
// ========================================

export default App
