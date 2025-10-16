import { useEffect, useState } from "react"

export default function ModeToggle (props) {

    return (
        <div className="site-container">
            <button className={`theme-toggle${props.theme ? ' active' : ''}`} type="button" aria-label="Toggle color theme" onClick={props.handleThemeToggle}></button>
        </div>
    )
}