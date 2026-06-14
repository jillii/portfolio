import './App.css'
import './assets/Nav.css'
import { useEffect, useCallback, useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Businesses from './pages/Businesses'
import { WORK, PROJECTS } from './data'
import Project from './pages/Project'
import ScrollToTop from './components/ScrollToTop.js'
import { Analytics } from "@vercel/analytics/react"

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") === 'dark' : window.matchMedia("(prefers-color-scheme: dark)").matches)

  const handleThemeToggle = useCallback(() => {
    setTheme(!theme)
  })

  useEffect(() => {
    document.querySelector('html').dataset.theme = theme ? 'dark' : 'light'
    localStorage.setItem("theme", theme ? 'dark' : 'light');
  }, [theme])

  return (
    <>
      <Analytics />
      <BrowserRouter>
        <ScrollToTop />
        <Nav />
        <div className='page'>
          <Routes>
            <Route path="/" element={<Home theme={theme} handleThemeToggle={handleThemeToggle} />}></Route>
            <Route path="/about/" element={<About />}></Route>
            <Route path="/businesses/" element={<Businesses />}></Route>
            {WORK.map((item, index) => {
              return <Route key={index} path={`/project/${item.slug}/`} element={<Project title={item.title} tech={item.tech} body={item.body} />}></Route>
            })}
            {PROJECTS.map((item, index) => {
              return <Route key={index} path={`/project/${item.slug}/`} element={<Project title={item.title} tech={item.tech} body={item.body} />}></Route>
            })}
          </Routes>
        </div>
        </BrowserRouter>
        <Footer />
    </>
  )
}

export default App
