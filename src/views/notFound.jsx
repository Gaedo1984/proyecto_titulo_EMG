import { Link } from "react-router-dom"

const NotFound = () => {
    return(
        <main className="not-found">
            <h1>404</h1>
            <p>Página no encontrada</p>
            <Link to="/" className="btn btn-primary"> Home</Link>
        </main>
    )
}

export default NotFound