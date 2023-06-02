import React from "react";
import { useEffect, useState} from "react";
import {client} from "../client"

export default  function RecipeList() {
    const[recipes, setRecipes] = useState([]);

  useEffect(() => {
    client
      .getEntries()
      .then((response) => {
        setRecipes(response.items)
        console.log(response.items)
      })
      .catch(console.error);
  },[]);
  return (<div>
    recipes
    </div>);
}


