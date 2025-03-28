import { CONTACT } from '../data'
import '../assets/Footer.css'
import Social from './Social'

export default function Footer () {
    return (
        <footer id="contact">
            <div className="site-container">
                <h2 class="footer-cta">Let me know how I can help you. <a href='mailto:jho3292@gmail.com'>Send me an email.</a></h2>
                <div className='flexbox'>
                    <p>©2025 Jill</p>
                    {CONTACT.socials &&
                        <div className='socials'>
                            {CONTACT.socials.map((social, index) => <Social key={index} url={social} />)}
                        </div>
                    }
                    <p>Made with love</p>
                </div>
            </div>
        </footer>
    )
}