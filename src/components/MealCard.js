import React, {useState} from "react";

function MealCard({id, day, mealtime, food, 
                    image="https://preview.redd.it/7zdwq4rv6ma91.png?width=640&crop=smart&auto=webp&s=3abbfac771b1cbdcd1a027b83d3b94d656f00a66", 
                    liked="false"}) {

    const [likeHeart, setLike] = useState(liked);

    function handleLikeClick(){
        console.log("clicked!")
        const newLikeStatus = !likeHeart;
        setLike(newLikeStatus);
        const url = "http://localhost:3000/meals/"+id;
        fetch(url, {
            method:"PATCH",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({liked: newLikeStatus})

        })
    }

    return(
        <div id={"meal"+id} className="card">
            <h4>{day +" "+ mealtime+ ": "+ food}</h4>
            <img src={image} alt={"picture of meal "+id} />
            <button onClick={handleLikeClick} className = "btn" id={"btn"+id}>Liked {likeHeart ? '💖' : '🤍'}</button>
        </div>
    )
}

export default MealCard;