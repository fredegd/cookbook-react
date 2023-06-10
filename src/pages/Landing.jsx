import { useState, useEffect } from "react";
import PageTitle from "../components/PageTitle";
import HomeCarousel from "../components/HomeCarousel";
import { client } from "../client";
import "../App.css";
export default function Landing() {
  const [recipes, setRecipes] = useState([]);


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

  return (
    <div className=" d-flex-column justify-content-center">
      <PageTitle first={"Our"} second={`Cookbook`} />
      <div className="container fluid w-75">
        <HomeCarousel />
      </div>
    </div>
  );
}

