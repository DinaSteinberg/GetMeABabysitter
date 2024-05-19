function BabysitterCard() {

    return (
        <>

        <div className="card" style={{ width: "40rem" }}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6VHm20SMmMfA61mXsFMVOPBshtgrVVg4kZOcX1VjyEQ&s" className="card-img-top object-fit-cover border rounded" alt="Jane Doe" />
        <div className="card-body">
            <h5 className="card-title">"Jane Doe"</h5>
            <p className="card-text">"I am super friendly and can even feed the fish!"</p>
        </div>
        <ul className="list-group list-group-flush">
            <li className="list-group-item">"Licensed Driver"</li>
            <li className="list-group-item">"CPR Certified"</li>
        </ul>
        </div>

        </>
    )
}

export default BabysitterCard