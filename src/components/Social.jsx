export default function Social (props) {
    const url = props.url
    let image = ''
    let alt = ''

    if (url.includes('linkedin')) {
        image = 'linkedin-in-brands.svg'
        alt = 'linkedin logo'
    } else if (url.includes('medium')) {
        image = 'medium-brands.svg'
        alt = 'medium logo'
    } else if (url.includes('stackoverflow')) {
        image = 'stack-overflow-brands.svg'
        alt = 'stack overflow logo'
    } else { // url contains github 
        image = 'github-brands.svg'
        alt = 'github logo'
    }
    return (
        <a href={url} target="_blank">
            <img src={`/assets/${image}`} alt={alt} />
        </a>
    )
}