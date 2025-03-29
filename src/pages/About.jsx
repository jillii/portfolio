import {ABOUT} from '../data'
import '../assets/About.css'

function About() {
  return (
    <>
      <section>
        <div className="site-container">
          <div className='flexbox about'>
            <div className="copy-area">{ABOUT.bio.map((paragraph, index) => {
              {return index === 0 ? <h1 key={index} className='headline'>{paragraph}</h1> : <p key={index}>{paragraph}</p>}
            })}
            <p>Check out my <a href='https://jillii.github.io/resume/' target='_blank'>CV.</a></p>
            </div>
            <div className='bubble'></div>
          </div>
        </div>
      </section>
    </>
  )
}
export default About;