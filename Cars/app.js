class Cars {
  constructor(model, year, engine, color) {
    this.model = model;
    this.year = year;
    this.engine = engine;
    this.color = color;
  }
  car() {
    return `Марка авто: ${this.model},  Год выпуска: ${this.year}, Мощность двигателя: ${this.engine}, Цвет машины: ${this.color}`;
  }
}

class ElectricCars extends Cars {
  constructor(model, year, engine, color, battery) {
    super(model, year, engine, color);
    this.battery = battery;
  }
  car() {
    return `Марка авто: ${this.model},  Год выпуска: ${this.year}, Мощность двигателя: ${this.engine}, Цвет машины: ${this.color}, Емкость батареи: ${this.battery}`;
  }

  promote() {
    return `Это мощный ${this.model} электромобиль нового поколения!`;
  }
}

const bmwElectro = new ElectricCars(
  "BMW",
  "2022",
  "1.6",
  "Черный",
  "Электромобиль"
);

console.log(bmwElectro.car());
console.log(bmwElectro.promote());
