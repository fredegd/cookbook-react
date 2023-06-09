import { useEffect, useState } from "react";
import { client } from "../client";
import RecipeView from "../components/RecipeView";
import { useParams, Link } from "react-router-dom";


export default function RecipeList() {
  const [recipes, setRecipes] = useState([]);
  let {id} = useParams();

  useEffect(() => {
    client
      .getEntries()
      .then((response) => {
        console.log(response.items, "hurra :)");
        setRecipes(response.items);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleRecipeClick = (recipeId) => {
    id = recipeId
    console.log("Recipe clicked with ID:", recipeId);
  }
  return (
    <div>
      <div>
        {recipes.map((recipe) => {
          return <Link key={recipe.sys.id} to={`/recipes/${recipe.sys.id}`} ><button >{recipe.fields.title}</button></Link>;
        })}
      </div>
      
    </div>
  );
}
