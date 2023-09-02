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
const removeItemButton = document.getElementById("remove-food-item-from-location");

//Global variables
var myKitchen;
var newFood;

//--------------------------------------------------------------------------------------------

//Create a kitchen
  createKitchenButton.addEventListener("click", function(){
    myKitchen = new Kitchen();
    //TEST#1
    console.log(myKitchen);
    });

//Create a food item
  createFoodButton.addEventListener("click", function() {
    newFood = new FoodItem();
    //TEST#2
    console.log(newFood);
  });

//Add item
  addItemButton.addEventListener("click", function() {
      myKitchen.FruitBowl.addItem(newFood);  
      myKitchen.FruitBowl.listContents();
  })

//Remove item
  removeItemButton.addEventListener("click", function() {
      myKitchen.FruitBowl.removeItem(newFood);  
      myKitchen.FruitBowl.listContents();
  });
    