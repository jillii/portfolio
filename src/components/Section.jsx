import Card from './Card'

export default function Section (props) {
    const title = props.title
    const list = props.list

    return (
        <section>
            <div className="site-container  section-head">
                <h2>{title}</h2>
            </div>
            <div className="card-container">
                {list.map((item, index) => <Card key={index} slug={item.slug} title={item.title} tech={item.tech} body={item.body} image={item.image} overlay={item.overlay} />)}
            </div>
        </section>
    )
}