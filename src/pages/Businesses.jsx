import { BUSINESSES } from '../data'
import '../assets/Cards.css'
import ReactMarkdown from "react-markdown"
import rehypeRaw from "rehype-raw"

function Businesses() {
    return (
        <>
            <section>
                <div className="site-container">
                    { BUSINESSES.title && <h1>{BUSINESSES.title}</h1> }
                    { BUSINESSES.subtitle && <p>{BUSINESSES.subtitle}</p> }
                    { BUSINESSES.paragraphs && BUSINESSES.paragraphs.map((item, index) => {
                        return (
                            <div className="card card-business" key={index}>
                                {item.headline && <h2>{item.headline}</h2>}
                                {item.body && <ReactMarkdown rehypePlugins={[rehypeRaw]}>{item.body}</ReactMarkdown>}
                            </div>
                        )
                    }) }
                </div>
            </section>
        </>
    )
}

export default Businesses