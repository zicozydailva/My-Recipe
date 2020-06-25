import React from 'react';
import style from "./recipe.module.css"

const Recipe = ({title, calories, image, ingredients}) => {
  return(
    <div className={style.recipe}>
      <h1>{title}</h1>
      <h3><strong>Ingredients:</strong></h3>
      <ol>
        {
          ingredients.map(ingredient => {
           return <li>{ingredient.text}</li>
          })
        }
      </ol>
      <p><strong>Calories: </strong>{calories}</p>
      <img className={style.image} alt="" src={image} />
    </div>
  )
}



export default Recipe

