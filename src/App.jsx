import React from "react";
import {Link, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Students from "./pages/Students";
import Teachers from "./pages/Teachers";

function App() {
  return(
    <>
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/students">Students</Link>
        <Link to="/teachers">Teachers</Link>

      </nav>
    </header>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/students" element={<Students/>}/>
      <Route path="/teachers" element={<Teachers/>}/>
      <Route path=""/>
    </Routes>
    <footer></footer>
    </>
  );
}

export default App;