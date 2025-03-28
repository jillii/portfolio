import { useState } from 'react'

export default function Filter(props) {
    const list = props.list
    const setList = props.setList
    const filterTech = props.filterTech
    const initial = props.initial

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
        <ul className="card-tech-filter">
            {filterTech.map((tech, index) => <li key={index} className="tech-pill filter" onClick={handleFilter} data-tech={tech}>{tech}</li>)}
            <li className='tech-pill filter' data-tech="reset" onClick={handleFilter}>Reset</li>
        </ul>
    )
}