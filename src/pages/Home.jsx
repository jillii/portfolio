import {ABOUT, WORK, PROJECTS} from '../data'
import Section from '../components/Section'
import '../assets/Home.css'

function Home() {
    return (
        <>
            <section>
                <div className="site-container">
                    <h1 className="bio">{ABOUT.summary}</h1>
                </div>
            </section>
            <Section title="Websites I've built for companies" list={WORK} />
            <Section title="Websites I've built for myself" list={PROJECTS} />
        </>
    )
}
export default Home;