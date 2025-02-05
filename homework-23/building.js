import {Apartment} from "./apartment.js";

export class Building{
  apartments = [];
  #apartmentsLimit;

  constructor(apartmentsLimit = 100) {
    this.#apartmentsLimit = apartmentsLimit;
  }

  addApartment(apartment) {
    if (apartment instanceof Apartment && this.apartments.length < this.#apartmentsLimit) {
      this.apartments.push(apartment)
    } else {
      console.log('Sorry dude it\s full')
    }
  }
}