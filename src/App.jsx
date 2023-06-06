import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import Landing from './components/Landing';
import RecipeList from './pages/RecipeList';
import Categories from './pages/Categories';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import './App.css';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/recipes' element={<RecipeList />} />
        <Route path='/Categories' element={<Categories />} />
        <Route path='/About' element={<About />} />
        <Route path='/Contact' element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}
