import ReactMarkdown from "react-markdown"
import rehypeRaw from "rehype-raw"
 
export default function Project (props) {
    const title = props.title
    const tech = props.tech
    const body = props.body

    return (
        <section>
            <div className="site-container">
                <h1>{title}</h1>
                {tech && <ul className="tech">{tech.map((item, index) => <li key={index}>{item}</li>)}</ul>}
                {body && <ReactMarkdown children={body} rehypePlugins={[rehypeRaw]} />}
            </div>
        </section>
    )
}