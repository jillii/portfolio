import { useState, useEffect } from 'react'

export default function Status () {
    const desktop = "Available for new opportunities"
    const mobile = "Available"
    const hover = "hello@jill.digital"
    const [copiedMsg, setCopiedMsg] = useState('')
    
    const addToClipboard = (e) => {
        navigator.clipboard.writeText('hello@jill.digital')
        setCopiedMsg('copied!')
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            setCopiedMsg('');
        }, 500);
        return () => clearTimeout(timer)
    }, [copiedMsg])

    return (
        <button id="statusBar" onClick={addToClipboard} className="status">
            <p className="status-text" data-desktop={desktop} data-mobile={mobile}></p>
            <p className="hover-text"><img src="/assets/clone-regular.svg"/>{hover}</p>
            <p id="copiedMsg" className="copied-message">{copiedMsg}</p>
        </button>
    )
}