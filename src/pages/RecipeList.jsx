import { useEffect, useState } from "react";
import styled from "styled-components";
import { client } from "../client";
import PageTitle from "../components/PageTitle";
import RecipeCard from "../components/RecipeCard";

export default function RecipeList() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    client
      .getEntries({ content_type: "cookbook" })
      .then((response) => {
        setRecipes(response.items);
      })
      .catch((err) => console.error(err));
  }, []);
  return (
    <>
      <PageTitle first={"All"} second={`Recipes`} />
      <CardsContainer>
        <CardGrid>
          {recipes.map((recipe) => {
            return (
              <div key={recipe.sys.id}>
                <RecipeCard recipe={recipe} />
              </div>
            );
          })}
        </CardGrid>
      </CardsContainer>
    </>
  );
}

const CardsContainer = styled.div`
  margin-top: 3em;
  display: flex;
  align-items: center;
  justify-content: center;

  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  transition: all 0.9s;
`;

const CardGrid = styled.div`
  width: 70%;
  display: grid;
  /* gap: 2rem; */
  grid-template-columns: repeat(auto-fit, minmax(18em, 1fr));
  justify-content: center;
  @media screen and (max-width: 1000px){
    width: 95%;

  }
`;
