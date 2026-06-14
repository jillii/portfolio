import { Link } from 'react-router-dom'
import '../assets/Cards.css'
import Project from '../pages/Project'
import { useState, useEffect, useMemo } from 'react'

export default function Card (props) {
    const title = props.title
    const image = props.image
    const tech = props.tech
    const body = props.body
    const overlay = props.overlay === 'white'
    const slug = props.slug
    const isVideo = image.includes('mp4')
    const breakpoint = 768
    const [isMobile, setIsMobile] = useState(window.innerWidth < breakpoint)
    const mobileAllowance = 5
    const additionalCount = tech.length - mobileAllowance

    // Track when window is < 768
    const handleResize = useMemo(() =>
        throttle(() => {
        setIsMobile(window.innerWidth < breakpoint)
        }, 200),
    [])

    useEffect(() => {
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return (
        <Link to={`/project/${slug}/`} 
              element={<Project title={title} tech={tech} body={body} />} 
              className="card" >
            {image &&
                isVideo ? <video src={image} autoPlay loop muted playsInline></video> : <img loading="lazy" src={image} alt={title} />
            }
            <div className='card-data'>
                <h3>{title}</h3>
                <ul className='card-tech'>
                    {tech.map((item, index) =>
                        {if (!isMobile || index < mobileAllowance) return (<li className="tech-pill" key={index}>{item}</li>)}
                    )}
                    {isMobile && additionalCount > 0 && 
                    <div className='additional tech-pill'>+{additionalCount}</div>}
                </ul>
            </div>
        </Link>
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