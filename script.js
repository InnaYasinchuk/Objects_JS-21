//1

const car = {
  model: "Lamborghini",
  year: 2021,
  color: "red",
  signal () {
    alert("fa!-fa!");
  },
};
car.color = "orange";
car.type = "electric";

car.signal();

//2

const salaries = {
  fronted: 12000,
  backend: 10000,
  designer: 8000,
  manager: 5000,
  dayPay() {
    alert("We must pay salary on Tuesday!");
  },
  total() {
    let sum = 0;
    for (let key in salaries) {
      if (typeof this[key] === "number") {
        sum += this[key];
      }
    }
    console.log(sum);
  },
};
salaries.total();
salaries.director = 10000;
console.log(salaries);

//3

function Computer(brand, system, cost) {
  this.brand = brand;
  this.system = system;
  this.cost = cost;
}

let dell = new Computer("Dell", "windows", 800);
let apple = new Computer("Apple", "MAC OS", 1700);

console.log(dell);
console.log(apple);

//4

function Computer(brand, system, cost) {
  this.brand = brand;
  this.system = system;
  this.cost = cost;
  this[Symbol.toPrimitive] = function (hint) {
    switch (hint) {
      case "string":
        return this.brand;
      case "number":
        return this.cost;
      case "default":
        return this.brand + " " + this.system + " " + this.cost + " " + "//";
    }
  };
}

console.log(String(dell));
console.log(+apple);
console.log(dell + apple);