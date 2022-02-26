class Restaurant {
  constructor(name, dishes, served = 0) {
    this.name = name;
    this.dishes = dishes;
    this.served = served;
  }

  greet() {
    return `The name of the restaurant is ${this.name}, and the dishes are ${this.dishes}`;
  }

  isOpen() {
    let currentTime = new Date().getHours();
    let currentDay = new Date().getDay();

    if (currentDay === 0 || currentDay === 6) {
      return `${this.name} is closed`;
    } else {
      if (currentTime > 9 && currentTime < 23) {
        return `${this.name} is open`;
      } else {
        return `${this.name} is closed`;
      }
    }
  }
  serve() {
    return (this.served += 1);
  }

  setServed(BunchOfPeople) {
    return (this.served += BunchOfPeople);
  }

  showTotalServed() {
    return this.served;
  }
}

const plov = new Restaurant("Plov", "kyrgyz");
console.log(plov.greet());
console.log(plov.isOpen());
console.log(plov.serve());
console.log(plov.setServed(11));
console.log(plov.serve());
console.log(plov.serve());
console.log(plov.showTotalServed());
