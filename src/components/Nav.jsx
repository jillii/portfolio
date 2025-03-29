import '../assets/Nav.css'
import { Link } from 'react-router-dom'
import { HashLink as Anchor } from 'react-router-hash-link'
import Status from './Status'

export default function () {
    return (
        <nav>
          <div className='site-container'>
            <ul>
              <li><Link to="/"></Link></li>
              <Status />
              <li><Link to="/about/">About</Link></li>
              <li><Anchor to="#contact">Contact</Anchor></li>
              <li><a href='https://jillii.github.io/resume/' target='_blank'>CV</a></li>
            </ul>
          </div>
        </nav>
    )
}