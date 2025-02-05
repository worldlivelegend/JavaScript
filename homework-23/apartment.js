import {Human} from "./human.js";

export class Apartment{
  residents = [];

  addResidents(human) {
    if (human instanceof Human) {
      this.residents.push(human)
    } else {
      console.log("It's not a human")
    }
  }
}