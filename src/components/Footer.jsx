import { CONTACT } from '../data'
import '../assets/Footer.css'

export default function Footer () {
    return (
        <footer>
            <div className="site-container">
                <p>©2025 Jill</p>
                {CONTACT.socials &&
                    <div className='socials'>
                        {CONTACT.socials.map((social) => <a href={social} target='_blank' className='social'></a>)}
                    </div>
                }
                <p>Made with love</p>

            </div>
        </footer>
    )
}