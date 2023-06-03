//App to manage shopping, kitchen stocks, recipies and meal plans.

//Create a kitchen object, this will contain 3 further objects:  Fridge, Freezer, StoreCupboards
// Each of these will contain a list of contents, a getter and setter method to add and remove contents, and a method to list contents

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

    constructor(name, weight, volume, number) {
      this.name = name;
      this.weight = weight;
      this.volume = volume;
      this.number = number;
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
  
function createFoodItem(){
  const FoodItemName = prompt("Please enter the food items name: ")
  const FoodItemAmount = prompt("Please enter the amount of the item to add:  ")
  return {
    name: foodItemName,
    amount: foodItemAmount
  };
}

//Created a kitchen
let homeKitchen = new Kitchen;

//Create a food item ready to add to an area
const button = document.getElementById("createFoodItemButton");
console.log(button);
button.addEventListener("click", function(event) {
  console.log("Create food item clicked");
}, false);
  