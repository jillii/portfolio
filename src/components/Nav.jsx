import '../assets/Nav.css'
import { Link } from 'react-router-dom'
import { HashLink as Anchor } from 'react-router-hash-link'
import { useState, useRef, useEffect, useMemo } from 'react'
import Status from './Status'

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function () {
  const [isActive, setIsActive] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const breakpoint = 768
  const [isMobile, setIsMobile] = useState(window.innerWidth < breakpoint)
  const navRef = useRef()

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

  // Track when window is < 768
  const handleResize = useMemo(() =>
    throttle(() => {
      setIsMobile(window.innerWidth < breakpoint)
    }, 200),
  [])

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [handleResize])

  useGSAP(() => {
    let mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      gsap.to('.nav', {
        scrollTrigger: {
          trigger: 'body',
          start: 'top -400px',
          end: 'bottom +=1', /* no end */
          scrub: true,
          onRefresh: () => setIsScrolled(window.scrollY > 400),
          onToggle: (self) => {
            setIsScrolled(self.isActive)

            gsap.set('.nav', {
              autoAlpha: self.isActive ? 0 : 1,
              paddingInline: self.isActive ? 40 : 0,
              y: self.isActive ? '-100%' : 0,
              position: self.isActive ? 'fixed' : 'absolute',
            })
            // Hide status button
            gsap.set('.status', {
              autoAlpha: self.isActive ? 0 : 1
            })
            // Animate nav
            gsap.to('.nav', {
              y: 0,
              autoAlpha: 1,
              duration: .4,
              ease: 'power1.out'
            })
          }
        }
      })
    })
  }, { scope: navRef })

  return (
    <div ref={navRef} className='nav-container'>
    <nav className='nav'>
      <div className={`site-container${isScrolled && !isMobile ? ' glass-container' : ''}`}>
        <ul className={`nav-list${isScrolled && !isMobile ? ' glass' : ''}`}>
          <li><Link onClick={removeActive} to="/"></Link></li>
          <Status />
          <div className={`trigger-wrapper${isActive ? ' active' : ''}`}>
            <button id="trigger" className='mobile-trigger' onClick={toggleActive}></button>
          </div>
          <span className='mobile-menu'>
            <div className='drawer'>
              <li><Link onClick={removeActive} to="/businesses/">For Businesses</Link></li>
              <li><Link onClick={removeActive} to="/about/">About</Link></li>
              <li><Anchor onClick={removeActive} to="#contact">Contact</Anchor></li>
              <li><a onClick={removeActive} href='https://jillii.github.io/resume/' target='_blank'>CV</a></li>
            </div>
          </span>
        </ul>
        {isScrolled && !isMobile &&
          <>
            <div className='glass-border'></div>
            <div className='glass-edge'></div>
          </>
        }
      </div>
    </nav>
    </div>
  )
}

const throttle = (func, delay) => {
  let inThrottle = false;
  return (...args) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), delay);
    }
  };
};