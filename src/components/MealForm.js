import React from "react";

function MealForm(){
    function handleSubmit(e) {
        e.preventDefault();
        console.log("submitted");
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

          <input type="text" id="desc" placeholder="Food eaten"/>
          <input type="text" id="pic" placeholder="Add a picture" />
          
          <button type="submit">Done Eating!</button>
        </form>
      );
}

export default MealForm;