import React from 'react'

function RecipeView() {
  return (
    <div>
        <h1>Title</h1>
        <h4>Short description</h4>
        <p>Facts</p>
        <p>Ingredients
            <ul>
                <li>Ingredient 1</li>
                <li>Ingredient 2</li>
                <li>Ingredient 3</li>
                <li>Ingredient 4</li>
            </ul>
        </p>
        <img src='https://www.thedeliciouscrescent.com/wp-content/uploads/2016/01/Tabbouleh-Salad-1.jpg'/>
        <p>Directions</p>
    </div>
  )
}

export default RecipeView