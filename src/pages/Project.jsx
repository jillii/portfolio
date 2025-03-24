import ReactMarkdown from "react-markdown"
import rehypeRaw from "rehype-raw"
import '../assets/Project.css'
 
export default function Project (props) {
    const title = props.title
    const tech = props.tech
    const body = props.body

    return (
        <section>
            <div className="site-container">
                <h1 className="project-title">{title}</h1>
                {tech && <ul className="tech">{tech.map((item, index) => <li className="tech-pill" key={index}>{item}</li>)}</ul>}
                {body && <div class="project-body"><ReactMarkdown children={body} rehypePlugins={[rehypeRaw]} /></div>}
            </div>
        </section>
    )
}