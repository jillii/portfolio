export default function Site (props) {
    const body = props.body

    return (
        <section>
            <div className="site-container">
                <div class="project-body">{body}</div>
            </div>
        </section>
    )
}