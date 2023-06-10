import { useEffect, useState } from "react";
import styled from "styled-components";
import { client } from "../client";
import { cls } from "../colors";
import { Link } from 'react-router-dom';

import RecipeCard from "./RecipeCard";

 let keyword;
export default function Selection({keyword}) {
  const [recipes, setRecipes] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState("");


  useEffect(() => {
    client
      .getEntries({ content_type: "cookbook" })
      .then((response) => {
        const selected = response.items.filter((item) => {
          const tags = item.metadata.tags.map((tag) => tag.sys.id);
          return tags.includes(keyword) || item.fields.title.toLowerCase().includes(searchKeyword.toLowerCase());
        });
        setRecipes(selected);
      })
      .catch((err) => console.error(err));
  }, [keyword, searchKeyword]);
console.log(recipes)

const handleSearchChange = (e) => {
  setSearchKeyword(e.target.value);
};



  return (
    <>
  <form onSubmit={(e) => e.preventDefault()}>
        <Searchbar
          type="text"
          placeholder="Search recipe..."
          value={searchKeyword}
          onChange={handleSearchChange}
        />
      </form>

    {/*
    a search functionality must be implemented:
    a keyword can be typed in the form and as a result 
    a list of RecipeCard containing the keyword must be returned
    i´d like to be able to search for a specific tag, but also  be able to search inside of the recipe
 and compare if the keyword is contained in the recipe.fields.title

    <form action="submit">
    <Searchbar type="text" placeholder="search recipe..." />
    </form> */}



      <Title>{keyword}</Title>
      <CardsContainer>
        <CardRow>
        {recipes.map((recipe) => {
            return (
              <Linked key={recipe.sys.id}  to={`/recipes/${recipe.sys.id}`}>
                <RecipeCard recipe={recipe} />
              </Linked>
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
border-top: 6px solid ${cls.col6};
background-image: linear-gradient(90deg, ${cls.col6} 0%, ${cls.col1} 20%, ${cls.col2} 100%);
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
const Linked = styled(Link)`
text-decoration: none;
color: ${cls.col4};;
`
const Searchbar= styled.input`
margin: auto;
/* margin-top: 0.5em; */
width: 8em;
height: 1.4em;
border-radius: 1em;
@media screen and (max-width: 770px) {
margin-top: 1.2em;

}
`