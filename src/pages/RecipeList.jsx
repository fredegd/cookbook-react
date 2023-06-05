import { useEffect, useState } from "react";
import styled from "styled-components";
import { client } from "../client";
import RecipeCard from "../components/RecipeCard"

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
<CardsContainer>
    <CardGrid>
      {recipes.map((recipe) => {
        return <div key={recipe.sys.id}>
          <RecipeCard recipe={recipe}/>
        </div>;
      })}
    </CardGrid>
 </CardsContainer>
  );
}

const CardsContainer = styled.div`
margin-top: 3em;
display: flex;
justify-content: center;
`

const CardGrid = styled.div`
width: 90%;
display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(12em, 1fr));
justify-content: center;
`
