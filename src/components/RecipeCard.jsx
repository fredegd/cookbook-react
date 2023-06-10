import '../App.css';
import {cls} from '../colors';
import styled from 'styled-components';
export default function RecipeCard({ recipe }) {
  return (
    <CardWrap>
      <Img
        style={{
          backgroundImage: `url(${recipe.fields.thumbnail.fields.file.url})`,
        }}
      >
      </Img>
      <CrdText>
        <h5>{recipe.fields.title}</h5>
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
    </CardWrap>
  );
}

const CardWrap = styled.div`
  height: auto;
  margin: 1em;
  min-width: 300px;
  background: ${cls.col3};
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.5s;
  border-radius:2em;
  &:hover{
    margin: 1em 0 ;
  }
  &:hover>*{
    width: 103%;
  }

  `

const Img = styled.div`
  min-height: 300px;
  min-width: 300px;
  width: 100%;
  background-clip: content-box;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border-radius:2em 2em 0 0 ;

`;

const CrdText = styled.div`
  text-decoration: none;
  width: 100%;
  height: auto;
  /* line-height: 0.8em; */
  border-radius: 0 0 2em 2em;
  background: ${cls.col3};
  `
