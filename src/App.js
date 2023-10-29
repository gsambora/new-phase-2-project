import logo from './logo.svg';
import './index.css';
import Home from "./components/Home.js"
import About from "./components/About.js"
import NavBar from "./components/NavBar.js"
import MealForm from "./components/MealForm.js"
import {React, useEffect, useState} from "react"
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

function App() {
  //["apple"], ["berry"], ["caramel"], ["tea"]
  const [meals, setMeals] = useState([]);

  useEffect(()=> {
    fetch("http://localhost:3000/meals")
    .then((r)=> r.json())
    .then((mealData) => {
      //console.log(mealData);
      setMeals(mealData);
    })
  }, []);

  console.log("All done? ", meals)

  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home meals={meals}/>} />
        <Route path="/about" element={<About />} />
        <Route path="/mealform" element={<MealForm />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
