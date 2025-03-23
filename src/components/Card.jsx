import '../assets/Cards.css'

export default function Card (props) {
    const title = props.title
    const image = props.image
    const overlay = props.overlay === 'white'
    const isVideo = image.includes('mp4')

    return (
        <div className="card" data-title={title} style={overlay ? {color: '#fff'} : {}}>
            {image &&
                isVideo ? <video src={image} autoPlay loop muted></video> : <img src={image} alt={title} />
            }
        </div>
    )
}