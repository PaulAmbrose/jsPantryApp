//App to manage shopping, kitchen stocks, recipies and meal plans.

//Create a kitchen object, this will contain 3 further objects:  Fridge, Freezer, StoreCupboards
// Each of these will contain a list of contents, a getter and setter method to add and remove contents, and a method to list contents

"use strict";

import * as kitchen from "./js_code/kitchen.js";
import * as foodItem from "./js_code/foodItem.js";

//Created a kitchen
const createKitchenButton = document.getElementById("create-kitchen");

createKitchenButton.addEventListener("click", function() {
  let newKitchen = new Kitchen();
  console.log("New kitchen created");
  kitchens.push(newKitchen);
  console.log(kitchens);
});

//Create a food item
const createFoodButton = document.getElementById("create-food");

createFoodButton.addEventListener("click", function() {
  let newFood = new FoodItem();
  console.log("New food created");
  console.log(newFood);
});