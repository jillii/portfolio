import { useState, useRef, useEffect } from 'react'
import Card from './Card'
import Filter from './Filter'

export default function Section (props) {
    const title = props.title
    const headerRef = useRef(null)
    const initial = props.list
    const [list, setList] = useState(initial)
    let filterTech = []
    list.map(item => {
        item.tech.map(tech => {
            if (filterTech.indexOf(tech) === -1) filterTech.push(tech) // Add tech is not already added
        })
    })

    return (
        <section className="card-section">
            <div className='site-container section-head'>
                <h2>{title}</h2>
            </div>
            <div className='site-container'>
                <label>Filter by language / technology:</label>
                <Filter list={list} setList={setList} filterTech={filterTech} initial={initial} />
            </div>
            <div className="card-container site-container">
                <div class="card-track">
                    {list.map((item, index) => {
                        return (<Card key={index} slug={item.slug} title={item.title} tech={item.tech} body={item.body} image={item.image} overlay={item.overlay} />)
                    })}
                </div>
            </div>
        </section>
    )
}