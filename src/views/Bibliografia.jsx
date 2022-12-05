import { useNavigate } from "react-router-dom"
import { useParams } from "react-router-dom"
import { useContext, useState, useEffect } from "react"
import ScrollToTop from "react-scroll-to-top";
import 'bootstrap/dist/css/bootstrap.min.css'

const Bibliografia = () => {
    return (
        <div className="acordion-biblio">
            <h3>Agradecimientos a <a href="https://radiopaedia.org/?lang=us" target="_blank">Radiopaedia</a></h3>
            <div className="accordion accordion-flush" id="accordionFlushExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingOne">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            Colecistitis
                        </button>
                    </h2>
                    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                            <ul>
                                <li><a href="https://radiopaedia.org/cases/36677?lang=us" target="_blank">Imagen 2</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                            Colelitiasis
                        </button>
                    </h2>
                    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                            <ul>
                                <li><a href="https://radiopaedia.org/cases/60354?lang=us" target="_blank">Imagen 1</a></li>
                                <li><a href="https://radiopaedia.org/cases/36677?lang=us" target="_blank">Imagen 2</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                            Aneurisma roto
                        </button>
                    </h2>
                    <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                            <ul>
                                <li><a href="https://radiopaedia.org/cases/19882?lang=us" target="_blank">Imagen 1</a></li>
                                <li><a href="https://radiopaedia.org/cases/20821?lang=us" target="_blank">Imagen 2</a></li>
                                <li><a href="https://radiopaedia.org/cases/94438?lang=us" target="_blank">Imagen 3</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingFour">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                            Diverticulitis
                        </button>
                    </h2>
                    <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                            <ul>
                                <li><a href="https://radiopaedia.org/cases/39843" target="_blank">Imagen 1</a></li>
                                <li><a href="https://radiopaedia.org/cases/40626" target="_blank">Imagen 2</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingFive">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                            Pancreatitis aguda
                        </button>
                    </h2>
                    <div id="flush-collapseFive" className="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                            <ul>
                                <li><a href="https://radiopaedia.org/cases/95687" target="_blank">Imagen 1</a></li>
                                <li><a href="https://radiopaedia.org/cases/89473" target="_blank">Imagen 2</a></li>
                                <li><a href="https://radiopaedia.org/cases/22434" target="_blank">Imagen 3</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingSix">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
                            Apendicitis
                        </button>
                    </h2>
                    <div id="flush-collapseSix" className="accordion-collapse collapse" aria-labelledby="flush-headingSix" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                            <ul>
                                <li><a href="https://radiopaedia.org/cases/146814" target="_blank">Imagen 1</a></li>
                                <li><a href="https://radiopaedia.org/cases/90977" target="_blank">Imagen 2</a></li>
                                <li><a href="https://radiopaedia.org/cases/70365" target="_blank">Imagen 3</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingSeven">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSeven" aria-expanded="false" aria-controls="flush-collapseSeven">
                            Neumoperitoneo
                        </button>
                    </h2>
                    <div id="flush-collapseSeven" className="accordion-collapse collapse" aria-labelledby="flush-headingSeven" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                            <ul>
                                <li><a href="https://radiopaedia.org/cases/147139" target="_blank">Imagen 1</a></li>
                                <li><a href="https://radiopaedia.org/cases/50037" target="_blank">Imagen 2</a></li>
                                <li><a href="https://radiopaedia.org/cases/23601" target="_blank">Imagen 3</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingEight">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseEight" aria-expanded="false" aria-controls="flush-collapseEight">
                            Hernia inguinal
                        </button>
                    </h2>
                    <div id="flush-collapseEight" className="accordion-collapse collapse" aria-labelledby="flush-headingEight" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                            <ul>
                                <li><a href="https://radiopaedia.org/cases/36677?lang=us" target="_blank">Imagen 1</a></li>
                                <li><a href="https://radiopaedia.org/cases/35473?lang=us" target="_blank">Imagen 2</a></li>
                                <li><a href="https://radiopaedia.org/cases/48587?lang=us" target="_blank">Imagen 3</a></li>
                                <li><a href="https://radiopaedia.org/cases/17016?lang=us" target="_blank">Imagen 4</a></li>
                                <li><a href="https://radiopaedia.org/cases/38970?lang=us" target="_blank">Imagen 5</a></li>
                                <li><a href="https://radiopaedia.org/cases/3370?lang=us" target="_blank">Imagen 6</a></li>
                                <li><a href="https://radiopaedia.org/cases/51844?lang=us" target="_blank">Imagen 7</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingNine">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseNine" aria-expanded="false" aria-controls="flush-collapseNine">
                            Hernia estrangulada
                        </button>
                    </h2>
                    <div id="flush-collapseNine" className="accordion-collapse collapse" aria-labelledby="flush-headingNine" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                            <ul>
                                <li><a href="https://radiopaedia.org/cases/35473?lang=us" target="_blank">Imagen 1</a></li>
                                <li><a href="https://radiopaedia.org/cases/37192?lang=us" target="_blank">Imagen 2</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingTen">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTen" aria-expanded="false" aria-controls="flush-collapseTen">
                            Hernia Hiatal
                        </button>
                    </h2>
                    <div id="flush-collapseTen" className="accordion-collapse collapse" aria-labelledby="flush-headingTen" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                            <ul>
                                <li><a href="https://radiopaedia.org/cases/95741?lang=us" target="_blank">Imagen 1</a></li>
                                <li><a href="https://radiopaedia.org/cases/83871?lang=us" target="_blank">Imagen 2</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingEleven">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseEleven" aria-expanded="false" aria-controls="flush-collapseEleven">
                            Cirrosis
                        </button>
                    </h2>
                    <div id="flush-collapseEleven" className="accordion-collapse collapse" aria-labelledby="flush-headingEleven" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                            <ul>
                                <li><a href="https://radiopaedia.org/cases/100046?lang=us" target="_blank">Imagen 1</a></li>
                                <li><a href="https://radiopaedia.org/cases/15852?lang=us" target="_blank">Imagen 2</a></li>
                                <li><a href="https://radiopaedia.org/cases/98090?lang=us" target="_blank">Imagen 3</a></li>
                                <li><a href="https://radiopaedia.org/cases/86990?lang=us" target="_blank">Imagen 4</a></li>
                                <li><a href="https://radiopaedia.org/cases/35973?lang=us" target="_blank">Imagen 5</a></li>
                                <li><a href="https://radiopaedia.org/cases/87823?lang=us" target="_blank">Imagen 6</a></li>
                                <li><a href="https://radiopaedia.org/cases/84382?lang=us" target="_blank">Imagen 7</a></li>
                                <li><a href="https://radiopaedia.org/cases/151845?lang=us" target="_blank">Imagen 8</a></li>
                                <li><a href="https://radiopaedia.org/cases/89714?lang=us" target="_blank">Imagen 9</a></li>
                                <li><a href="https://radiopaedia.org/cases/15852?lang=us" target="_blank">Imagen 10</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Bibliografia