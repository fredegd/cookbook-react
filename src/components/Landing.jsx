import React from 'react'
import Logo from "./Logo";
import Carousel from "./Carousel"
function Landing() {
  return (
    <div>
        <div className='title-logo'>
        <h1>Our Cookbook</h1>
        <Logo />
        </div>
        <Carousel />
    </div>
  )
}

export default Landing