import '../assets/Cards.css'

export default function Card (props) {
    const title = props.title
    const image = props.image
    const overlay = props.overlay === 'white'

    return (
        <div className="card" data-title={title} style={overlay ? {color: '#fff'} : {}}>
            {image && <img src={image} alt={title} />}
        </div>
    )
}