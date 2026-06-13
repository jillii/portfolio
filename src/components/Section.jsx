import { useState, useRef, useEffect } from 'react'
import Card from './Card'
import Filter from './Filter'

export default function Section (props) {
    const title = props.title
    const headerRef = useRef(null)
    let filterTech = []
    const initial = props.list
    const [list, setList] = useState(initial)
    const [isSticky, setIsSticky] = useState('')
    
    if (headerRef.current) {
        const observer = new window.IntersectionObserver(([entry]) => {
            const top = entry.boundingClientRect.top
            if (top === 102) {
                setIsSticky(' is-sticky')
            } else {
                setIsSticky('')
            }
        })
        observer.observe(headerRef.current)
    }

    return (
        <section className="card-section">
            <div className={`site-container section-head glass-container${isSticky}`} ref={headerRef}>
                <div className=" glass">
                    <h2>{title}</h2>
                </div>
                <div className='glass-border'></div>
                <div className='glass-edge'></div>
            </div>
            <div className="card-container site-container">
                <div class="card-track">
                    {list.map((item, index) => {
                        {item.tech.map((tech) => filterTech.indexOf(tech) === -1 ? filterTech.push(tech) : '')}
                        return (<Card key={index} slug={item.slug} title={item.title} tech={item.tech} body={item.body} image={item.image} overlay={item.overlay} />)
                    })}
                </div>
            </div>
            <div className='site-container'>
                <label>Filter by language / technology:</label>
                <Filter list={list} setList={setList} filterTech={filterTech} initial={initial} />
            </div>
        </section>
    )
}