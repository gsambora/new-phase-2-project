import React from "react";

function MealForm(){
    function handleSubmit(e) {
        e.preventDefault();
        console.log("submitted");
      }
    
      return (
        <form className="mealinfo" onSubmit={handleSubmit}>
          <input
            type="text"
            id="search"
            placeholder="food eaten"
            // value={fooddesc}
            // onChange={(e) => setSearchBar(e.target.value)}
          />
          <button type="submit">🔍</button>
        </form>
      );
}

export default MealForm;