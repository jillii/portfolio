import { Link } from 'react-router-dom'
import '../assets/Cards.css'
import Project from '../pages/Project'

export default function Card (props) {
    const title = props.title
    const image = props.image
    const tech = props.tech
    const body = props.body
    const overlay = props.overlay === 'white'
    const slug = props.slug
    const isVideo = image.includes('mp4')

    return (
        <Link to={`/project/${slug}/`} 
              element={<Project title={title} tech={tech} body={body} />} 
              className="card" 
              data-title={title} 
              style={overlay ? {color: '#fff'} : {}}>
            {image &&
                isVideo ? <video src={image} autoPlay loop muted></video> : <img loading="lazy" src={image} alt={title} />
            }
        </Link>
    )
}