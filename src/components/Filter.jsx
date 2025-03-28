import Button from "./FilterButton"
import { useState } from 'react'

export default function Filter(props) {
    const list = props.list
    const setList = props.setList
    const filterTech = props.filterTech
    const initial = props.initial
    const [active, setActive] = useState([])

    return (
        <ul className="card-tech-filter">
            {filterTech.map((tech, index) => <Button key={index} active={active} setActive={setActive} initial={initial} list={list} setList={setList} tech={tech} />)}
            <Button key={filterTech.length} setActive={setActive} initial={initial} list={list} setList={setList} tech='Reset' />
        </ul>
    )
}