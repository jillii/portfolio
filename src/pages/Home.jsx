import {ABOUT, WORK, PROJECTS} from '../data'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import Card from '../components/Card'
import Site from '../pages/Site'
import '../assets/Home.css'

function Home() {
    return (
        <>
            <section>
                <div className="site-container">
                    <h1 className="bio">{ABOUT.summary}</h1>
                </div>
            </section>
            {WORK &&
                <>
                    <section>
                        <div className='site-container section-head'>
                            <h2>Websites I've built for companies</h2>
                        </div>
                        <div className="card-container">
                            {WORK.map((item, index) => <Card key={index} slug={item.slug} title={item.title} image={item.image} overlay={item.overlay} />)}
                        </div>
                    </section>
                    <section>
                        <div className='site-container section-head'>
                            <h2>Websites I've built for myself</h2>
                        </div>
                        <div className="card-container">
                            {PROJECTS.map((item, index) => <Card key={index} slug={item.slug} title={item.title} image={item.image} overlay={item.overlay} />)}
                        </div>
                    </section>
                </>
            }

        </>
    )
}
export default Home;