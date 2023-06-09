import { useState, useEffect } from 'react';

import ControlledCarousel from '../components/ControlledCarousel';
import { client } from '../client';
function Landing() {
  const [recipes, setRecipes] = useState();

  useEffect(() => {
    client
      .getEntries({
        content_type: 'cookbook',
      })
      .then((response) => {
        console.log(response.items);
        setRecipes(response.items);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <div className='title-logo'>
        <h1>Our Cookbook</h1>
      </div>
      <ControlledCarousel recipes={recipes} />
    </div>
  );
}

export default Landing;
