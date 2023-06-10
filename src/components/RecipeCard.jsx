import '../App.css';
import styled from 'styled-components';

export default function RecipeCard({ recipe }) {
  console.log(recipe.fields.thumbnail.fields.file.url);
  return (
    <Card>
      <RecipeImg
        src={recipe.fields.thumbnail.fields.file.url}
        alt={recipe.fields.thumbnail.fields.title}
      />
      <CrdText>
        <h4>{recipe.fields.title}</h4>
        <p>
          Cooking Time: <span> {recipe.fields.cookingTime}</span>{' '}
        </p>
        <p>
          Difficulty: <span> {recipe.fields.difficulty} / 5</span>{' '}
        </p>
        <p>
          Rating: <span> noData of 5</span>{' '}
        </p>
      </CrdText>
    </Card>
  );
}

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
`;
const RecipeImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 2em 2em 0 0;
`;

const CrdText = styled.div`
  line-height: 0.2em;
  border-radius: 0 0 2em 2em;
  background: white;
  padding: 0 1em;
  height = 50%;
`;
