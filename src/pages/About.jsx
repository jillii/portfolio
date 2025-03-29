import {ABOUT} from '../data'
import '../assets/About.css'

function About() {
  return (
    <>
      <section>
        <div className="site-container">
          <div className='flexbox about'>
            <div class="copy-area">{ABOUT.bio.map((paragraph, index) => {
              {return index === 0 ? <h1 className='headline'>{paragraph}</h1> : <p>{paragraph}</p>}
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