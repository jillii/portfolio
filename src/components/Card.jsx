import { Link } from 'react-router-dom'
import '../assets/Cards.css'
import Site from '../pages/Site'

export default function Card (props) {
    const title = props.title
    const image = props.image
    const overlay = props.overlay === 'white'
    const slug = props.slug
    const tech = props.tech
    const body = props.body
    const isVideo = image.includes('mp4')

    return (
        <Link to={`/project/${slug}/`} 
              path={slug} 
              element={<Site />} 
              className="card" 
              data-title={title} 
              style={overlay ? {color: '#fff'} : {}}>
            {image &&
                isVideo ? <video src={image} autoPlay loop muted></video> : <img src={image} alt={title} />
            }
        </Link>
    )
}