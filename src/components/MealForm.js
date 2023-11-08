import React from "react";
import { Link } from "react-router-dom";

function MealForm({handleNewMeal}){
    function handleSubmit(e) {
        e.preventDefault();
        console.log("submitted");
        console.log(e.target.day.value)

        const imgLink= e.target.pic.value == "" ? "https://preview.redd.it/7zdwq4rv6ma91.png?width=640&crop=smart&auto=webp&s=3abbfac771b1cbdcd1a027b83d3b94d656f00a66"
        : e.target.pic.value ;

        fetch("http://localhost:3000/meals",{
          method: "POST",
          headers:{
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            day: e.target.day.value,
            mealtime: e.target.mealtime.value,
            food: e.target.desc.value,
            image: imgLink,
            liked: false
          })
        })
        .then((r)=>r.json())
        .then((newMeal)=>handleNewMeal(newMeal));

        e.target.reset()
      }
    
      return (
        <form className="mealinfo" onSubmit={handleSubmit}>
          <h1>New Meal</h1>
        
          <select name="day">
            <option>Sunday</option>
            <option>Monday</option>
            <option>Tuesday</option>
            <option>Wednesday</option>
            <option>Thursday</option>
            <option>Friday</option>
            <option>Saturday</option>
          </select>

          <select name="mealtime">
            <option>Breakfast</option>
            <option>Lunch</option>
            <option>Dinner</option>
            <option>Snack</option>
          </select>

          <input type="text" name="desc" placeholder="Food eaten"/>
          <input type="text" name="pic" placeholder="Add a picture" />
          
          <button type="submit">Done Eating!</button>
        </form>
      );
}

export default MealForm;