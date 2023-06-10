import React, { useEffect, useState } from 'react'
import { client } from "../client";
import { useParams, Link } from "react-router-dom";

export default function RecipeView() {

  const [recipe, setRecipe] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    client
      .getEntry(id)
      .then((response) => {
        console.log(response.fields, "testtt");
        setRecipe(response.fields);
    
      })
      .catch((err) => console.log(err));
      }, [])

      if (!recipe) {
        return <div>Loading...</div>;
      }

      const imageUrl = recipe.thumbnail.fields.file.url.startsWith('https:')
        ? recipe.thumbnail.fields.file.url
        : `http:${recipe.thumbnail.fields.file.url}`;


  return (
    <div className='recipePage'>
        <h1>{recipe.title}</h1>
        <h4>{recipe.subtitle}</h4>
        <div>
          <p>Needed time: {recipe.cookingTime}</p>
          <p>Difficulty: {recipe.difficulty}</p>
        </div>
        
        <div>Ingredients
            <ul>
                <li>Ingredient 1</li>
                <li>Ingredient 2</li>
                <li>Ingredient 3</li>
                <li>Ingredient 4</li>
            </ul>
        </div>
        <img src={imageUrl} alt='"Recipe' />
        <p>Instructions</p>
    </div>
  )
}