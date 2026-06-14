import Button from "./FilterButton"
import { useState, useRef } from 'react'

export default function Filter(props) {
    const list = props.list
    const setList = props.setList
    const filterTech = props.filterTech
    const initial = props.initial
    const [active, setActive] = useState([])
    const filterRef = useRef()

    return (
        <ul ref={filterRef} className="card-tech-filter">
            {filterTech.map((tech, index) => <Button key={tech} active={active} setActive={setActive} initial={initial} list={list} setList={setList} tech={tech} />)}
            <Button key={'reset'} setActive={setActive} initial={initial} list={list} setList={setList} tech='Reset' />
        </ul>
    )
}