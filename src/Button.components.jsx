
function Button({ index, id, title, set_id }) {
    return (
        <button key={index} className={`btn btn-primary m-2 ${id == index ? "selected" : ""}`} onClick={() => { id == index ? set_id(-1) : set_id(index) }}>{title}</button>
    )
}
export default Button