import logo from './logo.svg';
import './App.css';
import Home from "./components/Home.js"
import About from "./components/About.js"
import NavBar from "./components/NavBar.js"
import MealForm from "./components/MealForm.js"
import {React, useState} from "react"
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

function App() {
  const [meals, setMeals] = useState();

  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/mealform" element={<MealForm />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
