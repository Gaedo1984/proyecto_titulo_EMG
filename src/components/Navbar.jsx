import { Link } from "react-router-dom"
import { useContext } from "react"
import Context from "../context/context.js"

const Navbar = () =>{
    const {cartTotal} = useContext(Context)
    return(
        <nav className="main-nav">
            <Link to="/"><h3>Home</h3></Link>
            <Link to="/patologia"><h3><i className="fa-solid fa-kit-medical"></i> Patologías</h3></Link>
        </nav>
    )
}

export default Navbar