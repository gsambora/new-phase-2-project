import React, {useState} from "react";

function MealCard({id, day, mealtime, food, 
                    image="https://preview.redd.it/7zdwq4rv6ma91.png?width=640&crop=smart&auto=webp&s=3abbfac771b1cbdcd1a027b83d3b94d656f00a66", 
                    liked="false"}) {
    return(
        <div id={"meal"+id} className="card">
            <h4>{day +" "+ mealtime+ ": "+ food}</h4>
            <img src={image} alt={"picture of meal "+id} />
            <button className = "btn" id={"btn"+id}>Liked</button>
        </div>
    )
}

export default MealCard;