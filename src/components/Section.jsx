import { useState } from 'react'
import Card from './Card'

export default function Section (props) {
    const title = props.title
    const initial = props.list
    const [list, setList] = useState(initial)
    let filterTech = []

    const handleFilter = (e) => {
        const target = e.target
        const tech = target.dataset.tech
        
        target.classList.add('active')
        
        if (tech == 'reset') {
            setList(initial)
            Array.from(document.getElementsByClassName('active')).map((el) => el.classList.remove('active'))
        } else {
            let newList = []
            list.map((project) => {
                if (project.tech.indexOf(tech) !== -1) {
                    newList.push(project)
                }
            })
            setList(newList)
        }
    }

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
                <label>Tech Stack</label>
                <ul className="card-tech-filter">
                    {filterTech.map((tech, index) => <li key={index} className="tech-pill filter" onClick={handleFilter} data-tech={tech}>{tech}</li>)}
                    <li className='tech-pill filter' data-tech="reset" onClick={handleFilter}>Reset</li>
                </ul>
            </div>
        </section>
    )
}