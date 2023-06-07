import { useState, useEffect } from "react";
import ControlledCarousel from "../components/ControlledCarousel"
import { client } from "../client";
import "../App.css"
export default function Landing() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    client
      .getEntries()
      .then((response) => {
     setRecipes(response.items);
    
      })
      .catch((err) => console.error(err));
  }, []);


  return (
    <div  className=" d-flex-column justify-content-center">
      <div >
      <h1 className="page-title"> <span class="highlight-container"><span class="highlight">Our&nbsp;&nbsp;&nbsp;</span></span>
     <span class="highlight-container"><span class="highlight">Cookbook&nbsp;</span></span>
     </h1>
      </div>
     
     <div  className="container fluid w-75" >
      <ControlledCarousel recipes={recipes} />
     </div>
     
    </div>
    
  )
}

