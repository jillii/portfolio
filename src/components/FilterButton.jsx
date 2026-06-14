import classNames from "classnames"
import { useRef } from 'react'

export default function Button(props) {
    const initial = props.initial
    const list = props.list
    const setList = props.setList
    const tech = props.tech
    const active = props.active
    const setActive = props.setActive
    const btnRef = useRef()

    const activeClass = classNames({
        'active': active && active.indexOf(tech) !== -1
    })

    const handleFilter = () => {
        let newList = []
        if (tech === 'Reset') {
            const btn = btnRef.current
            setActive([])
            newList = initial
            btn.closest('.card-tech-filter').querySelector('button').focus() // Return focus to first button

        } else {
            let newActive = [...active, tech]
            setActive(newActive)
            list.map((project) => {
                if (project.tech.indexOf(tech) !== -1) {
                    newList.push(project)
                }
            })
        }
        setList(newList)
    }

    return (
        <li><button ref={btnRef} className={`tech-pill filter ${activeClass}${tech === 'Reset' ? ' isReset' : ''}`} onClick={handleFilter}>{tech}</button></li>
    )
}