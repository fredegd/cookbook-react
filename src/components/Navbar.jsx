import React from 'react'
import "./css/navbar.css"
export default  function Navbar() {
  return (
    <div className='navbar'>
        <nav>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Recipe</li>
                <li>Categories</li>
                <li>Video</li>
                <li>Contact</li>
            </ul>
        </nav>
    </div>
  )
}