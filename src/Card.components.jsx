
function Card({ id, title, description }) {

    return (
        <div key={id} className="card p-1 mt-4">
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    )
}
export default Card