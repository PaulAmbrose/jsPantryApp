"use strict";

class FoodItem {

    constructor() {
      /*let itemDetails = this.getItemDetails();
      this.name = itemDetails[0];
      this.metric = itemDetails[1];
      this.amount = itemDetails[2];
      this.location = itemDetails[3]*/   
    
      this.name = "TestBanana";
      this.metric = "Count";
      this.amount = 5;
    
    }

    addItem(){
      console.log("Test");
    }

    /*getItemDetails(){
      var FoodItemName = prompt("Please enter the food items name: ")
      var FoodItemMetric = prompt("Please enter the food items metric (weight, volume or number):  ")
      var FoodItemAmount = prompt("Please enter the amount of the item to add:  ")
    }*/
  }

  export{FoodItem};