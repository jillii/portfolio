import '../assets/Nav.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { HashLink as Anchor } from 'react-router-hash-link'
import Home from '../pages/Home'
import About from '../pages/About'

export default function () {
    return (
        <BrowserRouter>
            <nav>
            <div className='site-container'>
                <ul>
                <li><Link to="/"></Link></li>
                <li><Link to="/about/">About</Link></li>
                <li><Anchor to="#contact">Contact</Anchor></li>
                </ul>
            </div>
            </nav>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/about/" element={<About />}></Route>
            </Routes>
        </BrowserRouter>
    )
}