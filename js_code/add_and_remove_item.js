"use strict";

function addItem() {
    let itemDetails = getItemDetails();
    
}

function getItemDetails(){
    var FoodItemName = prompt("Please enter the food items name: ")
    var FoodItemMetric = prompt("Please enter the food items metric (weight, volume or number):  ")
    var FoodItemAmount = prompt("Please enter the amount of the item to add:  ")
    var FoodItemLocation= prompt("Please enter the location to add to:  ")
      return [FoodItemName, FoodItemMetric, FoodItemAmount, FoodItemLocation];
    }