import './App.css'
import './assets/Nav.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { HashLink as Anchor } from 'react-router-hash-link'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import { WORK, PROJECTS } from './data'
import Project from './pages/Project'
import ScrollToTop from './components/ScrollToTop.js'

function App() {

  return (
    <>
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
          {WORK.map((item, index) => {
            return <Route key={index} path={`/project/${item.slug}/`} element={<Project title={item.title} tech={item.tech} body={item.body} />}></Route>
          })}
          {PROJECTS.map((item, index) => {
            return <Route key={index} path={`/project/${item.slug}/`} element={<Project title={item.title} tech={item.tech} body={item.body} />}></Route>
          })}
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App
