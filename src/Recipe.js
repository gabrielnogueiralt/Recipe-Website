import React from "react"
import style from "./recipe.module.css"

const Recipe = ({title, calories, image, ingredients}) => {
    return(
        <div className={style.recipe}>
            <h1>{title}</h1>
            <ul className={style.ul}>
                {ingredients.map(ingredient => (    
                    <li>{ingredient.text}</li>
                ))}
            </ul>
            <p>Calories: {Math.round(calories*100)/100}</p>
            <img className={style.image} src={image} alt="" />
        </div>
    )
}

export default Recipe