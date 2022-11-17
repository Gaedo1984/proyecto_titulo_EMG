const Ingredients = ({ingredients})=> {
    return(
        <div className="ingredients">
            <p className="bold">Síntomas:</p>
            <ul>
                {
                    ingredients.map((ingredient) => {
                        return(
                            <li key={ingredient}>- {ingredient}</li>
                        )
                    })
                }
            </ul>
        </div>
    
    )
}

export default Ingredients