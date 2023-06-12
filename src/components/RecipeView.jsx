import React, { useEffect, useState } from 'react'
import { client } from "../client";
import { useParams, Link } from "react-router-dom";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';



export default function RecipeView() {
  const [recipe, setRecipe] = useState(null);
  const [recipeImgs, setRecipeImgs] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    client
      .getEntry(id)
      .then((response) => {
        console.log(response.fields, "testtt");
        setRecipe(response.fields);
        console.log(response.fields.images)
        setRecipeImgs(response.fields.images)
      })
      .catch((err) => console.log(err));
  }, []);

  if (!recipe) {
    return <div>Loading...</div>;
  }

  const imageUrl = recipe.thumbnail.fields.file.url.startsWith("http:")
    ? recipe.thumbnail.fields.file.url
    : `http:${recipe.thumbnail.fields.file.url}`;



  const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <p>{children}</p>,
      [BLOCKS.HEADING_1]: (node, children) => <h1>{children}</h1>,
      // Add more renderNode functions as needed for other block types
    },
    renderMark: {},
    renderInline: {},
  };

  const renderRichText = (richText) => {
    return documentToReactComponents(richText, options);
  };

  return (
    <div className="recipe-view-container">
      <h1 className="recipe-title">{recipe.title}</h1>
      <h4 className="recipe-sub-title">{recipe.subtitle}</h4>
      <div className="recipe-facts">
        <h4>Needed time: {recipe.cookingTime}</h4>
        <h4>Difficulty: {recipe.difficulty}</h4>
      </div>
      <div className='recipe-middle'>
        <div className="recipe-ingredients">
          <div>{renderRichText(recipe.ingredientsTable)}</div>
        </div>
        <img className="recipe-img" src={imageUrl} alt='"Recipe' />
      </div>

      <div className="recipe-instructions">
        {renderRichText(recipe.instructions)}
      </div>
      <Carousel>
      {/* recipeImgs.includes("")&& */}
        { recipeImgs.map((image, index) => (
          <img src={`http:${image.fields.file.url}`}alt="" />
// console.log("https:"+image.fields.file.url)
          // <div key={index}>
          //   <img src={image.url} alt={`Image ${index}`} />
          // </div>
        ))}
      </Carousel>
    </div>
  );
}
// imageUrl2

<Carousel
  showArrows={true}
  showThumbs={true}
  infiniteLoop={true}
  autoPlay={true}
  interval={3000}
  transitionTime={500}
>
  {/* Carousel content */}
</Carousel>