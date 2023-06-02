import { useState } from 'react'
import {Route, Routes} from "react-router-dom"
import './App.css'
import  Navbar  from "./components/Navbar";
import Landing from "./components/Landing";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/"  element={<Landing />}/>
    </Routes>
    </>
  )
}

export default App
