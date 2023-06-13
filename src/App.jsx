import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Landing from "./pages/Landing";
import RecipeList from "./pages/RecipeList";
import Categories from "./pages/Categories";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import RecipeView from "./components/RecipeView";
import "./App.css";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <>
      {/* <div>
        {' '}
        
      </div> */}
      <Nb />
      <div className="app-main">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/recipes" element={<RecipeList />} />
          <Route path="/Categories" element={<Categories />} />
          <Route path="/recipes/:id" element={<RecipeView />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>

        <Footer />
      </div>
    </>
  );
}

const Nb = styled(Navbar)`
  position: fixed;
`;
