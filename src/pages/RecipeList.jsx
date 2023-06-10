
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { client } from '../client';
import RecipeView from '../components/RecipeView';
import { useParams, Link } from 'react-router-dom';
import PageTitle from "../components/PageTitle";
import RecipeCard from '../components/RecipeCard';

export default function RecipeList() {
  const [recipes, setRecipes] = useState([]);
  let { id } = useParams();

  useEffect(() => {
    client
      .getEntries({
        content_type: 'cookbook',
      })
      .then((response) => {
        console.log(response.items, 'hurra :)');
        setRecipes(response.items);
      })
      .catch((err) => console.error(err));
  }, []);

  const handleRecipeClick = (recipeId) => {
    id = recipeId;
    console.log('Recipe clicked with ID:', recipeId);
  };
  return (
    <>

      <PageTitle first={"All"} second={`Recipes`} />
       <CardsContainer>
        <CardGrid>
          {recipes.map((recipe) => {
            return (
              <Link key={recipe.sys.id}  to={`/recipes/${recipe.sys.id}`}>
                <RecipeCard recipe={recipe} />
              </Link>
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
  text-decoration: none;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  transition: all 0.2s;
`;

const CardGrid = styled.div`
  width: 70%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(18em, 1fr));
  justify-content: center;
  transition: all 2s;

  @media screen and (max-width: 1000px){
    width: 95%;
  }
`;
