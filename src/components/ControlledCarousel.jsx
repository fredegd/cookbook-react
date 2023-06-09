import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import CarouselItem from 'react-bootstrap/CarouselItem';
import styled from 'styled-components';

function ControlledCarousel({ recipes }) {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  if (recipes) {
    return (
      <Carousel activeIndex={index} onSelect={handleSelect}>
        {recipes.map((recipe) => {
          console.log(recipe.fields);
          return (
            <Carousel.Item>
              <img
                className='d-block w-25'
                src={recipe.fields.thumbnail.fields.file.url}
                alt='First slide'
              />
              <Carousel.Caption>
                <h3>{recipe.fields.title}</h3>
                <p>{recipe.fields.subtitle}</p>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
      //    <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
      //   <div className="carousel-inner">
      //     {recipes.map((recipe)=>{
      //     console.log(recipe.fields.thumbnail)
      //     return( <div className="carousel-item">
      //     <img src={recipe.fields.thumbnail.fields.file.url} className="d-block w-100" alt={recipe.fields.thumbnail.fields.title} />
      //     </div>)})}
      //   </div>
      //   <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
      //     <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      //     <span className="visually-hidden">Previous</span>
      //   </button>
      //   <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
      //     <span className="carousel-control-next-icon" aria-hidden="true"></span>
      //     <span className="visually-hidden">Next</span>
      //   </button>
      // </div>
    );
  } else {
    console.log('no recepies');
  }
}

export default ControlledCarousel;

// const recipeImg = recipe.map((recipe)=>{ return(console.log(recipe.fields.thumbnail.fields.file.url))});

const carouselImg = styled.div`
  width: 100px;
`;

{
  /* <Carousel activeIndex={index} onSelect={handleSelect}>
     {recipes.map((recipe)=>{return(
       <CarouselItem>
      
       <img
         className="d-block w-50 carousel-img"
         src={"https://images.unsplash.com/photo-1683009427598-9c21a169f98f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"}
         alt="Slide"
       />
     </CarouselItem>
     )})}
    </Carousel> */
}
