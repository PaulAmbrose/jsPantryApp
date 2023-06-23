//App to manage shopping, kitchen stocks, recipies and meal plans.

//Create a kitchen object, this will contain 3 further objects:  Fridge, Freezer, StoreCupboards
// Each of these will contain a list of contents, a getter and setter method to add and remove contents, and a method to list contents

"use strict";

let kitchens = [];

class Kitchen {

    constructor() {
      this.Fridge = new Fridge();
      this.Freezer = new Freezer();
      this.StoreCupboards = new StoreCupboards();
      this.Unsorted = []
    }  

  }
  
  class Fridge {
  
    constructor() {
      this.contents = [];
    }
  
    addItem(item) {
      this.contents.push(item);
    }
  
    removeItem(item) {
      this.contents.splice(this.contents.indexOf(item), 1);
    }
  
    listContents() {
      console.log("The contents of the fridge are:");
      for (const item of this.contents) {
        console.log(item);
      }
    }
  }
  
  class Freezer {
  
    constructor() {
      this.contents = [];
    }
  
    addItem(item) {
      this.contents.push(item);
    }
  
    removeItem(item) {
      this.contents.splice(this.contents.indexOf(item), 1);
    }
  
    listContents() {
      console.log("The contents of the freezer are:");
      for (const item of this.contents) {
        console.log(item);
      }
    }
  }
  
  class StoreCupboards {
  
    constructor() {
      this.contents = [];
    }
  
    addItem(item) {
      this.contents.push(item);
    }
  
    removeItem(item) {
      this.contents.splice(this.contents.indexOf(item), 1);
    }
  
    listContents() {
      console.log("The contents of the store cupboards are:");
      for (const item of this.contents) {
        console.log(item);
      }
    }
  }

  class FoodItem {

    constructor() {
      let itemDetails = this.getItemDetails();
      this.name = itemDetails[0];
      this.metric = itemDetails[1];
      this.amount = itemDetails[2];   
    }

    getItemDetails(){
      var FoodItemName = prompt("Please enter the food items name: ")
      var FoodItemMetric = prompt("Please enter the food items metric (weight, volume or number):  ")
      var FoodItemAmount = prompt("Please enter the amount of the item to add:  ")
      return [FoodItemName, FoodItemMetric, FoodItemAmount];
    }
  }

console.log(kitchens);

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