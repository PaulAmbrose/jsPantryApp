"use strict";

function addItem() {

}


    getItemDetails(){
      var FoodItemName = prompt("Please enter the food items name: ")
      var FoodItemMetric = prompt("Please enter the food items metric (weight, volume or number):  ")
      var FoodItemAmount = prompt("Please enter the amount of the item to add:  ")
      return [FoodItemName, FoodItemMetric, FoodItemAmount];
    }