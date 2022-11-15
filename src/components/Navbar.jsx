import { Link } from "react-router-dom"
import { useContext } from "react"
import Context from "../context/context.js"

const Navbar = () =>{
    const {cartTotal} = useContext(Context)
    return(
        <nav className="main-nav">
            <Link to="/"><h3><i className="fa-solid fa-pizza-slice"></i>Mamma Mia!</h3></Link>
            <Link to="/carrito"><h3><i className="fa-solid fa-cart-shopping"></i>${cartTotal()}</h3></Link>
        </nav>
    )
}

export default Navbar