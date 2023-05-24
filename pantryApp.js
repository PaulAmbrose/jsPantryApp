//App to manage shopping, kitchen stocks, recipies and meal plans.

//Create a kitchen object, this will contain 3 further objects:  Fridge, Freezer, StoreCupboards
// Each of these will contain a list of contents, a getter and setter method to add and remove contents, and a method to list contents

class Kitchen {

    constructor() {
      this.fridge = new Fridge();
      this.freezer = new Freezer();
      this.storeCupboards = new StoreCupboards();
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

    constructor(name, container, amountMetric, weight, volume, number) {
      this.name = name;
      this.container = container;
      this.amountMetric = amountMetric;
      this.weight = weight;
      this.volume = volume;
      this.number = number;
    }
  
    addAmount(amount) {
      if (this.amountMetric === "weight") {
        this.weight += amount;
      } else if (this.amountMetric === "volume") {
        this.volume += amount;
      } else if (this.amountMetric === "number") {
        this.number += amount;
      }
    }
  
    removeAmount(amount) {
      if (this.amountMetric === "weight") {
        this.weight -= amount;
      } else if (this.amountMetric === "volume") {
        this.volume -= amount;
      } else if (this.amountMetric === "number") {
        this.number -= amount;
      }
    }
  
  }
  

let homeKitchen = new Kitchen;
let FrozenFish = new FoodItem("FrozenFish", "Box", "number", "", "", 12)
homeKitchen.freezer.addItem(FrozenFish);
console.log(homeKitchen.freezer.contents[0].name);