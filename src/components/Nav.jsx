import '../assets/Nav.css'
import { Link } from 'react-router-dom'
import { HashLink as Anchor } from 'react-router-hash-link'
import { useState } from 'react'
import Status from './Status'

export default function () {
  const [isActive, setIsActive] = useState(false)

  const removeActive = () => {
    setIsActive(false)
  }

  const toggleActive = () => {
    if (isActive) {
      setIsActive(false)
    } else {
      setIsActive(true)
    }
  }

  return (
    <nav>
      <div className='site-container'>
        <ul>
          <li><Link onClick={removeActive} to="/"></Link></li>
          <Status />
          <button id="trigger" className={`mobile-trigger${isActive ? ' active' : ''}`} onClick={toggleActive}></button>
          <span className='mobile-menu'>
            <div className='drawer'>
              <li><Link onClick={removeActive} to="/about/">About</Link></li>
              <li><Anchor onClick={removeActive} to="#contact">Contact</Anchor></li>
              <li><a onClick={removeActive} href='https://jillii.github.io/resume/' target='_blank'>CV</a></li>
            </div>
          </span>
        </ul>
      </div>
    </nav>
  )
}