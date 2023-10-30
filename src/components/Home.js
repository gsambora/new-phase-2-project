import React from "react";
import MealCard from "./MealCard.js";

function Home({meals}){

    return(
        <div>
            <h1>Home</h1>

            <ul className="allMealCards">{
                meals.map((meal)=>{
                    //console.log(meal)
                    return(<MealCard key={meal.id} id={meal.id} day={meal.day} mealtime={meal.mealtime}
                        food={meal.food} image={meal.image} liked={meal.liked} />)
                })
            }</ul>
        </div>
    )
}

export default Home;