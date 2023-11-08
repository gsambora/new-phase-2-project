import React from "react";

function MealForm({handleNewMeal}){
    function handleSubmit(e) {
        e.preventDefault();
        console.log("submitted");
        console.log(e.target.day.value)

        fetch("http://localhost:3000/meals",{
          method: "POST",
          headers:{
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            day: e.target.day.value,
            mealtime: e.target.mealtime.value,
            food: e.target.desc.value,
            image: e.target.pic.value,
            liked: false
          })
        })
        .then((r)=>r.json())
        .then((newMeal)=>handleNewMeal(newMeal));

        e.target.reset()
      }
    
      return (
        <form className="mealinfo" onSubmit={handleSubmit}>
          <h2>New Meal</h2>
        
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