import React from "react";
import {Link} from "react-router-dom";

function NavBar(){
    return(
        <nav>
            <Link to="/">Home</Link>
            <Link to="about">About</Link>
            <Link to="mealform">Add New Meal</Link>
        </nav>
    )
}

export default NavBar;