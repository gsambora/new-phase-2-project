import React, {useState} from "react";
import { Link } from "react-router-dom";

function MealForm({handleNewMeal}){
  const [day, setDay] = useState("Sunday");
  const [mealtime, setTime] = useState("Breakfast");
  const [food, setFood] = useState("");
  const [img, setImg] = useState("");

    function handleSubmit(e) {
        e.preventDefault();

        const imgLink= img == "" ? "https://preview.redd.it/7zdwq4rv6ma91.png?width=640&crop=smart&auto=webp&s=3abbfac771b1cbdcd1a027b83d3b94d656f00a66"
        : img ;

        fetch("http://localhost:3000/meals",{
          method: "POST",
          headers:{
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            day: day,
            mealtime: mealtime,
            food: food,
            image: imgLink,
            liked: false
          })
        })
        .then((r)=>r.json())
        .then((newMeal)=>handleNewMeal(newMeal));

        setDay("Sunday");
        setTime("Breakfast");
        setFood("");
        setImg("");
      }
    
      return (
        <form className="mealinfo" onSubmit={handleSubmit}>
          <h1>New Meal</h1>
        
          <select name="day" value={day} onChange={(e)=>setDay(e.target.value)}>
            <option>Sunday</option>
            <option>Monday</option>
            <option>Tuesday</option>
            <option>Wednesday</option>
            <option>Thursday</option>
            <option>Friday</option>
            <option>Saturday</option>
          </select>

          <select name="mealtime" value={mealtime} onChange={(e)=>setTime(e.target.value)}>
            <option>Breakfast</option>
            <option>Lunch</option>
            <option>Dinner</option>
            <option>Snack</option>
          </select>

          <input type="text" name="desc" value={food} onChange={(e)=>setFood(e.target.value)} placeholder="Food eaten"/>
          <input type="text" name="pic" value={img} onChange={(e)=>setImg(e.target.value)} placeholder="Add a picture" />
          
          <button type="submit">Done Eating!</button>
        </form>
      );
}

export default MealForm;