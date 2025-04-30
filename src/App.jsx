import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import './App.css'

import Navbar from './components/Navbar'

import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Resume from './pages/Resume'
import Blog from './pages/Blog'
import BlogPost from "./pages/BlogPost";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0B0B15] to-[#29344D]">
        <Navbar />
        <Routes>
            <Route path="/" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
        </Routes>
    </div>
  )
}

export default App
