import { useEffect, useState } from "react"

export default function ModeToggle () {
    const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") === 'dark' : window.matchMedia("(prefers-color-scheme: dark)").matches)

    const handleThemeToggle = () => {
        setTheme(!theme)
    }
    useEffect(() => {
        document.querySelector('html').dataset.theme = theme ? 'dark' : 'light'
        localStorage.setItem("theme", theme ? 'dark' : 'light');
    }, [theme])

    return (
        <div className="site-container">
            <button className={`theme-toggle${theme ? ' active' : ''}`} type="button" aria-label="Toggle color theme" onClick={handleThemeToggle}></button>
        </div>
    )
}