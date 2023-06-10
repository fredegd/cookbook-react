import { useEffect, useState } from "react";
import styled from "styled-components";
import { client } from "../client";
import { cls } from "../colors";

import RecipeCard from "./RecipeCard";

export default function Selection({keyword}) {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    client
      .getEntries({ content_type: "cookbook" })
      .then((response) => {
        const selected = response.items.filter((item) => {
          const tags = item.metadata.tags.map((tag) => tag.sys.id);
          return tags.includes(keyword);
        });
        setRecipes(selected);
      })
      .catch((err) => console.error(err));
  }, []);
console.log(recipes)

  return (
    <>
      <Title>{keyword}</Title>
      <CardsContainer>
        <CardRow>
          {
          recipes.map((recipe) => {
            return (
              <div key={recipe.sys.id}>
                <RecipeCard recipe={recipe} />
              </div>
            );
          })}
        </CardRow>{" "}
      </CardsContainer>
    </>
  );
}

const Title = styled.h1`
margin-top: 2em;
padding: 1em;
background-image: linear-gradient(90deg, ${cls.col2} 0%, ${cls.col1} 50%, ${cls.col2} 100%);
color: ${cls.col4};
text-shadow: 0 5px 5px rgb(0, 0, 0);

`
const CardsContainer = styled.div`
  margin-top: 1em;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  transition: all 0.9s;
`;

const CardRow = styled.div`
  display: flex;
  flex-direction: row;
  overflow: scroll;
  @media screen and (max-width: 1000px) {
    width: 95%;
  }
`;
