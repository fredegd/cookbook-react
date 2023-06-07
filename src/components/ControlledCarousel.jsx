import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import CarouselItem from 'react-bootstrap/CarouselItem'
import "./css/controlledCarousel.css"

export default  function ControlledCarousel({recipes}) {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

return(
 
  <Carousel  activeIndex={index} onSelect={handleSelect}>
  {recipes.map((recipe) => {
    console.log(recipe)
    return (
      <Carousel.Item  key={recipe.id}>
        <img
          className="rounded carouselImage"
          src={recipe.fields.thumbnail.fields.file.url}
          alt="Slide"
        />
        <Carousel.Caption className='carousel-description'>
          <h3 >{recipe.fields.title}</h3>
          <p >{recipe.fields.subtitle}</p>
        </Carousel.Caption>
      </Carousel.Item>
    );
  })}
</Carousel>
 );
}

