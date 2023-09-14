const Sections = ({isActive = false, name}) =>{
    return (
        <a
        className={`nav-link ${isActive ? "active fw-bolder" : null}`}
        aria-current="page" href="#"
        >
            {name}
        </a>
    )
}

export default Sections