//App to manage shopping, kitchen stocks, recipies and meal plans.

//Create a kitchen object, this will contain 3 further objects:  Fridge, Freezer, StoreCupboards
// Each of these will contain a list of contents, a getter and setter method to add and remove contents, and a method to list contents

"use strict";

class Kitchen {

    constructor() {
      this.Fridge = new Fridge();
      this.Freezer = new Freezer();
      this.StoreCupboards = new StoreCupboards();
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

    constructor(name, weight = 0 , volume = 0, number = 0) {
      this.name = name;
      this.weight = weight;
      this.volume = volume;
      this.number = number;
    }

    getItemDetails(){
      const FoodItemName = prompt("Please enter the food items name: ")
      const FoodItemMetric = prompt("Please enter the food items metric (weight, volume or number):  ")
      const FoodItemAmount = prompt("Please enter the amount of the item to add:  ")
      this.addAmount()
    }

    addAmount(amount) {
      this.weight = this.weight + amount
      this.volume = this.volume + amount
      this.number = this.number + amount
    }
  
    removeAmount(amount) {
      this.weight = this.weight - amount
      this.volume = this.volume - amount
      this.number = this.number - amount
    }
  }

//Created a kitchen
const createKitchenButton = document.getElementById("create-kitchen");

createKitchenButton.addEventListener("click", function() {
  let newKitchen = new Kitchen();
  console.log(newKitchen);
});

//Create a food item
