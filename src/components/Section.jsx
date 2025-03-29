import { useState } from 'react'
import Card from './Card'
import Filter from './Filter'

export default function Section (props) {
    const title = props.title
    let filterTech = []
    const initial = props.list
    const [list, setList] = useState(initial)

    return (
        <section className="card-section">
            <div className="site-container section-head">
                <h2>{title}</h2>
            </div>
            <div className="card-container">
                {list.map((item, index) => {
                    {item.tech.map((tech) => filterTech.indexOf(tech) === -1 ? filterTech.push(tech) : '')}
                    return (<Card key={index} slug={item.slug} title={item.title} tech={item.tech} body={item.body} image={item.image} overlay={item.overlay} />)
                })}
            </div>
            <div className='site-container'>
                <label>Filter by language / technology:</label>
                <Filter list={list} setList={setList} filterTech={filterTech} initial={initial} />
            </div>
        </section>
    )
}