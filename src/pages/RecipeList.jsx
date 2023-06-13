import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { client } from '../client';
import { cls } from "../colors";
import { useParams, Link } from 'react-router-dom';
import PageTitle from "../components/PageTitle";
import RecipeCard from '../components/RecipeCard';

export default function RecipeList() {
  const [recipes, setRecipes] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState("");
  let { id } = useParams();

  useEffect(() => {
    client
      .getEntries({
        content_type: 'cookbook',
      })
      .then((response) => {
        setRecipes(response.items);
      })
      .catch((err) => console.error(err));
  }, []);

  const handleSearchChange = (e) => {
    setSearchKeyword(e.target.value);
  };

  const filteredRecipes = recipes.filter((recipe) =>
    recipe.fields.title.toLowerCase().includes(searchKeyword.toLowerCase())
  );

  return (
    <>
      <PageTitle first={"All"} second={`Recipes`} />
      
      <SearchContainer>
        <SearchForm onSubmit={(e) => e.preventDefault()}>
          <SearchInput
            type="text"
            placeholder="Search recipe..."
            value={searchKeyword}
            onChange={handleSearchChange}
          />
        </SearchForm>
      </SearchContainer>

      <CardsContainer>
        <CardGrid>
          {filteredRecipes.map((recipe) => (
            <Linked key={recipe.sys.id} to={`/recipes/${recipe.sys.id}`}>
              <RecipeCard recipe={recipe} />
            </Linked>
          ))}
        </CardGrid>
      </CardsContainer>
    </>
  );
}

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1em;

`;

const SearchForm = styled.form`
  display: flex;

`;

const SearchInput = styled.input`
  width: 200px;
  padding: 0.5em;
  border-radius: 1em;
`;

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
  gap: 1.5em;
  grid-template-columns: repeat(auto-fit, minmax(18em, 1fr));
  justify-content: center;
  transition: all 2s;

  @media screen and (max-width: 1000px){
    width: 95%;
  }
`;

const Linked = styled(Link)`
  text-decoration: none;
  color: ${cls.col4};
`;
