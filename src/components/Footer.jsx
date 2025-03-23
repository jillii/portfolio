import { CONTACT } from '../data'
import '../assets/Footer.css'

export default function Footer () {
    return (
        <footer id="contact">
            <div className="site-container">
                <h2 class="footer-cta">Let me know how I can help you. <a href='mailto:jho3292@gmail.com'>Send me and email.</a></h2>
                <div className='flexbox'>
                    <p>©2025 Jill</p>
                    {CONTACT.socials &&
                        <div className='socials'>
                            {CONTACT.socials.map((social) => <a href={social} target='_blank' className='social'></a>)}
                        </div>
                    }
                    <p>Made with love</p>
                </div>
            </div>
        </footer>
    )
}