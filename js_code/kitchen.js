"use strict";

let kitchens = [];

class Kitchen {

    constructor() {
      let kitchenName = this.getKitchenName();
      this.Name = kitchenName;
      this.Fridge = new Fridge();
      this.Freezer = new Freezer();
      this.StoreCupboards = new StoreCupboards();
      this.FruitBowl = new FruitBowl();
      this.Unsorted = []
    }  

    getKitchenName() {
      var usersNameForKitchen = prompt("Please enter the kitchens name: ");
      return usersNameForKitchen;
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

  class FruitBowl {
  
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
      console.log("The contents of the FruitBowl are:");
      for (const item of this.contents) {
        console.log(item);
      }
    }
  }

  export{Kitchen};