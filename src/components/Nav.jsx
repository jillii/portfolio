import '../assets/Nav.css'
import { Link } from 'react-router-dom'
import { HashLink as Anchor } from 'react-router-hash-link'

export default function () {
    return (
        <nav>
          <div className='site-container'>
            <ul>
              <li><Link to="/"></Link></li>
              <li><Link to="/about/">About</Link></li>
              <li><Anchor to="#contact">Contact</Anchor></li>
            </ul>
          </div>
        </nav>
    )
}