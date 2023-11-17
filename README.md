# Simple Meal Tracker

## Usage

This simple meal tracker can help you log your meals with the day of the week, mealtime, and a link to a picture. Once you have added your latest meal you can mark it as "liked" so you know to make it again. If you do not add a link to a picture, the default image is an omelette that says "Sorry". You cannot delete any of the meals once you have tracked them unless you directly edit the db.json file. 

![Example usage](/app-use.gif)

## Description

I built this app for my Phase 2 project at Flatiron school. My main goal was to create a single page application using React. My application had to contain at least 5 components, 3 client-side routes using React Router, and make use of a json-server for my backend. 

My components were:
*App, which contains the router and fetches all meals from the server
*Home, which displays all of the meal cards
*MealCard, which is the template for each card and adds the like button
*MealForm, with my controlled form to add a new meal
*About
*NavBar

## Stretch Goals

In the future, I would like to add filter capabilities to the home page so you can see meals eaten on Fridays or all breakfast foods. It would also be useful for the user to delete any meals that they added on accident. Of course, I would also like to add more styling to the display in CSS.