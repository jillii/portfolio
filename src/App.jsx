import './App.css'
import './assets/Nav.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {

  return (
    <>
      <BrowserRouter>
        <nav>
          <div className='site-container'>
            <ul>
              <li><Link to="/"></Link></li>
              <li><Link to="/about/">About</Link></li>
              <li><Link to="/contact/">Contact</Link></li>
            </ul>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about/" element={<About />}></Route>
          <Route path="/contact/" element={<Contact />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
