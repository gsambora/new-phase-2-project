import React from "react";
import {Link} from "react-router-dom";

function NavBar(){
    return(
        <nav>
            <Link className={"navLink"} to="/">Home</Link>
            <Link className={"navLink"} to="about">About</Link>
            <Link className={"navLink"} to="mealform">Add New Meal</Link>
        </nav>
    )
}

export default NavBar;