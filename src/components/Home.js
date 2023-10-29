import React from "react";
import MealCard from "./MealCard.js";

function Home({meals}){
    console.log("All Meals: "+meals);

    return(
        <div>
            <h1>Home</h1>

            <ul className="allMealCards">{
                meals.map((meal)=>{
                    console.log(meal)
                    return(<MealCard key={meal.id} id={meal.id} mealtime={meal.mealtime}
                        food={meal.food} image={meal.image} liked={food.liked} />)
                })
            }</ul>
        </div>
    )
}

export default Home;