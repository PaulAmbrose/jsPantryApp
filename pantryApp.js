//App to manage shopping, kitchen stocks, recipies and meal plans.

//Create a kitchen object, this will contain 3 further objects:  Fridge, Freezer, StoreCupboards
// Each of these will contain a list of contents, a getter and setter method to add and remove contents, and a method to list contents

"use strict";

//Housekeeping - imports
import { Kitchen } from "./js_code/kitchen.js";
import { FoodItem } from "./js_code/food_Item.js";

//DOM cache
const createKitchenButton = document.getElementById("create-kitchen");
const createFoodButton = document.getElementById("create-food");
const addItemButton = document.getElementById("add-food-item-to-location");

//indexes and arrays
let kitchenIndex = new Array();
let foodItemIndex = new Array();

//--------------------------------------------------------------------------------------------

//Create a kitchen
  createKitchenButton.addEventListener("click", function(){
    let myKitchen = new Kitchen();
        kitchenIndex.push(myKitchen);
    //TEST#1
    console.log(kitchenIndex);
    });

//Create a food item
  createFoodButton.addEventListener("click", function() {
    let newFood = new FoodItem();
      foodItemIndex.push(newFood);
    //TEST#2
    console.log(foodItemIndex);
  });

//Add item
  addItemButton.addEventListener("click", function() {
    let activeKitchen = kitchenIndex[0];
    //TEST#3
    console.log(activeKitchen);
})

//Remove item