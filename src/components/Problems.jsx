const Problems = ({complications, urgency, signs, mc})=> {
    return(
        <div className="ingredients">
            <p className="bold">Urgencia o emergencia:</p>
            <ul>
                {
                    urgency.map((item) => {
                        return(
                            <li key={item}>- {item}</li>
                        )
                    })
                }
            </ul>
            <p className="bold">Utiliza o no medio de contraste:</p>
            <ul>
                {
                    mc.map((item) => {
                        return(
                            <li key={item}>- {item}</li>
                        )
                    })
                }
            </ul>
            <p className="bold">Complicaciones:</p>
            <ul>
                {
                    complications.map((item) => {
                        return(
                            <li key={item}>- {item}</li>
                        )
                    })
                }
            </ul>
            <p className="bold">Síntomas:</p>
            <ul>
                {
                    signs.map((item) => {
                        return(
                            <li key={item}>- {item}</li>
                        )
                    })
                }
            </ul>
        </div>
    
    )
}

export default Problems