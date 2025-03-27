import Card from './Card'

export default function Section (props) {
    const title = props.title
    const list = props.list
    let filterTech = []

    return (
        <section className="card-section">
            <div className="site-container  section-head">
                <h2>{title}</h2>
            </div>
            <div className="card-container">
                {list.map((item, index) => {
                    {item.tech.map((tech) => filterTech.indexOf(tech) === -1 ? filterTech.push(tech) : '')}
                    return (<Card key={index} slug={item.slug} title={item.title} tech={item.tech} body={item.body} image={item.image} overlay={item.overlay} />)
                })}
            </div>
            <div className='site-container'>
                <ul className="card-tech-filter">
                    {filterTech.map((tech, index) => <li key={index} class="tech-pill filter">{tech}</li>)}
                </ul>
            </div>
        </section>
    )
}