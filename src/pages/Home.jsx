import {ABOUT, WORK, PROJECTS} from '../data'
import Section from '../components/Section'
import '../assets/Home.css'
import React, { useState, useEffect } from 'react';

function Home() {
    const webDevAs = ABOUT.list
    const [text, setText] = useState(webDevAs[0])
    const [index, setIndex] = useState(1)
    
    const getNext = () => {
        index === webDevAs.length - 1 ? setIndex(0) : setIndex(index + 1)
        setText(webDevAs[index])
    }
    
    useEffect(() => {
        const intervalID = setInterval(getNext, 2500)
        return () => clearInterval(intervalID)
    }, [getNext])

    return (
        <>
            <section>
                <div className="site-container">
                    <h1 className="bio site-title">{ABOUT.summary} <span key={index} id="as-text" className="as-text">{text}</span></h1>
                </div>
            </section>
            <Section title="Websites I've built for clients" list={WORK} />
            <Section title="Websites I've built for myself" list={PROJECTS} />
        </>
    )
}
export default Home;