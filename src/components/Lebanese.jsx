import { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import styled from "styled-components";
import { client } from "../client";
import RecipeCard from "../components/RecipeCard";

import React from "react";

export default function Lebanese() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    client
      .getEntries({ content_type: "cookbook" })
      .then((response) => {
        setRecipes(response.items);
      })
      .catch((err) => console.error(err));
  }, []);

  recipes.map((recip)=>{
    const tags =recip.metadata.tags
    
    tags.map((tag)=>{
            console.log(tag.sys.id)
    })

  })
  //
  //            THIS IS STILL WORK IN PROGRESS  
  //THIS IS STILL WORK IN PROGRESS
  //            THIS IS STILL WORK IN PROGRESS
  //THIS IS STILL WORK IN PROGRESS
  //            THIS IS STILL WORK IN PROGRESS
  //
  return (
    <>
      <h2>Lebanese</h2>
      <CardsContainer>
        <CardGrid>
          {
          recipes.map((recipe) => {
            // // console.log(recipe.metadata.tags)
            return (
              <div key={recipe.sys.id}>
                <RecipeCard recipe={recipe} />
              </div>
            );
          })}
        </CardGrid>{" "}
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
  @media screen and (max-width: 1000px) {
    width: 95%;
  }
`;
