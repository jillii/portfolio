import classNames from "classnames"

export default function Button(props) {
    const initial = props.initial
    const list = props.list
    const setList = props.setList
    const tech = props.tech
    const active = props.active
    const setActive = props.setActive

    const activeClass = classNames({
        'active': active && active.indexOf(tech) !== -1
    })

    const handleFilter = () => {
        let newList = []
        if (tech === 'Reset') {
            setActive([])
            newList = initial
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
        <li className={`tech-pill filter ${activeClass}`} onClick={handleFilter}>{tech}</li>
    )
}