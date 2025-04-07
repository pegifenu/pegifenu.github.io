import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import './App.css'

import Navbar from './components/Navbar'

import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Blog from './pages/Blog'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#29344D] to-[#0B0B15]">
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/blog" element={<Blog />} />
        </Routes>
    </div>
  )
}

export default App
