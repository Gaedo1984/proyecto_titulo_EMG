import { useNavigate } from "react-router-dom"
import { useContext } from "react"
import Context from "../context/context.js"
import Ingredients from "./Ingredients.jsx"

const Menu = () => {
    const {menu} = useContext(Context)
    const navigate = useNavigate()

    const viewPizza = (id) => navigate(`/pizza/${id}`)

    return(
        <section className="menu">
            {
                menu.map((item) => {
                    return(
                        <div className="card" key={item.id}>
                            <div className="content">
                                <img src={item.img} alt={item.name} />
                                <h4>{item.name}</h4>
                                <Ingredients ingredients={item.ingredients}></Ingredients>
                                <div className="btn-row">
                                    <button className="btn btn-primary" onClick={()=> viewPizza(item.id)}>Ver más</button>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </section>
    )
}

export default Menu