import '../assets/Nav.css'
import { Link, useLocation } from 'react-router-dom'
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
  const toggleRef = useRef()
  const location = useLocation()

  const toggleActive = () => {
    setIsActive(!isActive)
  }

  // Track when window is < 768
  const handleResize = useMemo(() =>
    throttle(() => {
      setIsMobile(window.innerWidth < breakpoint)
    }, 200),
  [])

  const handleKeyboardNavigation = (e) => {
    if (!isMobile) return

    if (e.key === 'Escape') {
      setIsActive(false) // close nav
      toggleRef.current.focus() // move focus back to toggle
      return
    }
    const focusable = getFocusableItems(navRef.current.querySelector('.drawer'))
    const isLast = e.target === focusable[focusable.length - 1]
    const isFirst = e.target === focusable[0]
    const index = [...focusable].indexOf(e.target)
 
    if (e.key === 'Tab' && e.shiftKey) {
      if (isFirst) {
        e.preventDefault()
        toggleRef.current.focus() // move focus back to toggle
        setIsActive(false)
      }
    }
    if (e.key === 'Tab' && !e.shiftKey) {
      if (isLast) {
        setIsActive(false)
      }
    }
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      if (isLast) {
        focusable[0].focus()
      } else {
        focusable[index + 1].focus()
      }
    }
    if (e.key === 'ArrowUp') {
      e.preventDefault()
      if (isFirst) {
        focusable[focusable.length - 1].focus()
      } else {
        focusable[index - 1].focus()
      }
    }
  }

  const getFocusableItems = (el) => {
    return el.querySelectorAll('a, button')
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [handleResize])

  useEffect(() => {
    setIsActive(false)
  }, [location])

  useEffect(() => {
    const nav = navRef.current
    nav.addEventListener('keydown', handleKeyboardNavigation)
    return () => nav.removeEventListener('keydown', handleKeyboardNavigation)
  }, [])

  useEffect(() => {
    navRef.current.querySelector('.drawer').inert = isMobile && !isActive // Set drawer to inert = true on mobile when nav closed, false on desktop
  }, [isMobile, isActive])

  // Scroll down mobile menu
  useGSAP(() => {
    let mm = gsap.matchMedia();

    mm.add("(max-width: 767px)", () => {
      const tl = gsap.timeline()

      tl.to('.mobile-menu li', {
        x: -4,
        autoAlpha: 0
      })
      tl.to('.mobile-menu', {
        autoAlpha: isActive ? 1 : 0,
        pointerEvents: isActive ? 'all' : 'none',
        duration: .2,
        ease: 'power.in(1)',
      })
      if (isActive) {
        tl.to('.mobile-menu li', {
          x: 0,
          autoAlpha: 1,
          duration: .3,
          stagger: .1,
          ease: 'power3.in'
        }, '-=.1')
      }
      return () => { tl.kill(); gsap.set(".mobile-menu, .mobile-menu li", { clearProps: "all" }); }
    })
  }, { scope: navRef, dependencies: [isMobile, isActive] })

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
          <li><Link to="/"></Link></li>
          <Status />
          <div className={`trigger-wrapper${isActive ? ' active' : ''}`}>
            <button ref={toggleRef} id="trigger" className='mobile-trigger' onClick={toggleActive}></button>
          </div>
          <span className='mobile-menu'>
            <div className='drawer'>
              <li><Link onClick={toggleActive} to="/businesses/">For Businesses</Link></li>
              <li><Link onClick={toggleActive} to="/about/">About</Link></li>
              <li><Anchor onClick={toggleActive} to="#contact">Contact</Anchor></li>
              <li><a onClick={toggleActive} href='https://jillii.github.io/resume/' target='_blank'>CV</a></li>
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