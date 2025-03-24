import { useParams } from 'react-router'
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

export default function Site () {

    const params = useParams();
    const title = params.title
    const tech = params.tech
    const body = params.body


    console.log(title)

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