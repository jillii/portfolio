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
                {Object.entries(list).map((project) => {
                    const slug = project[0]
                    return( 
                        project.map((item, index) => {
                            if (index === 1) {
                                return <Card key={index} slug={slug} title={item.title} tech={item.tech} body={item.body} image={item.image} overlay={item.overlay} />
                            }
                        })
                    )     
                                                
                })}
            </div>
        </section>
    )
}