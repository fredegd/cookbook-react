import { useEffect, useState } from "react";
import { client } from "../client";

export default function RecipeList() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    client
      .getEntries()
      .then((response) => {
        console.log(response.items, "hurra :)");
        setRecipes(response.items);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      {recipes.map((recipe) => {
        return <div key={recipe.sys.id}>{recipe.fields.title}</div>;
      })}
    </div>
  );
}
