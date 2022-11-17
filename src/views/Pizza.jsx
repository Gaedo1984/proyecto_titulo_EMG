import { useParams } from "react-router-dom"
import { useContext, useState, useEffect } from "react"
import Context from "../context/context.js"
import 'bootstrap/dist/css/bootstrap.min.css'

import Ingredients from "../components/Ingredients.jsx"
import Problems from "../components/Problems.jsx"


const Pizza = () => {
    const { id } = useParams()
    const { menu } = useContext(Context)

    const [patologia, setPatologia] = useState({ ingredients: [], imgs: [], complications: [], urgency: [], signs: [], mc: [] })
    useEffect(() => {
        const patologia = menu.filter((item) => item.id === id)
        setPatologia(patologia[0])
    }, [])

    return (
        <main>
            <div className="pizza-view">
                <article className="content">
                    <h4>{patologia.name}</h4>
                    <p className="desc">{patologia.desc}</p>
                    <Ingredients ingredients={patologia.ingredients}></Ingredients>
                    <Problems
                        complications={patologia.complications}
                        urgency={patologia.urgency}
                        signs={patologia.signs}
                        mc={patologia.mc}
                    ></Problems>
                </article>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-sm carousel-w">
                        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                {
                                    patologia.imgs.map((item, index) => {
                                        return (
                                            <div key={item} className={`carousel-item ${(index == 0) ? 'active' : ''}`}>
                                                <img src={item} className="d-block w-100" alt="..." />
                                            </div>

                                        )
                                    })
                                }
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm image-problem">
                        <img src={patologia.img2} alt={patologia.name}></img>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Pizza