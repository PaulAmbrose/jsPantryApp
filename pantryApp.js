//App to manage shopping, kitchen stocks, recipies and meal plans.

//Create a kitchen object, this will contain 3 further objects:  Fridge, Freezer, StoreCupboards
// Each of these will contain a list of contents, a getter and setter method to add and remove contents, and a method to list contents

"use strict";

//Housekeeping - imports
import { Kitchen } from "./js_code/kitchen.js";
import { FoodItem } from "./js_code/food_Item.js";

//indexes and arrays
let foodItemIndex = new Array();

//--------------------------------------------------------------------------------------------

//Create a kitchen
const createKitchenButton = document.getElementById("create-kitchen");

  createKitchenButton.addEventListener("click", function() {
    let myKitchen = new Kitchen();
    console.log(myKitchen);
  });

//Create a food item - set to unsorted
const createFoodButton = document.getElementById("create-food");

  createFoodButton.addEventListener("click", function() {
    let newFood = new FoodItem();
    console.log(newFood);
      foodItemIndex.push(newFood);
    console.log(foodItemIndex);
  });
//Add item
const addItemButton = document.getElementById("add-food-item-to-location");

  addItemButton.addEventListener("click", function() {
    
    console.log("Test");
  });

//Remove item