const MERCEDES = 'MERCEDES';
const C300 = 'C300';
const MAYBACH = 'MAYBACH';

const BMW = 'BMW';
const X5 = 'X5';
const X6 = 'X6';

interface Car {
  name: string;
  price: number;
  description: string;
}

interface CarFactory {
  create(name: string): Car | null;
}

interface AbstractFactory {
}

class Mercedes implements Car {
  name: string;
  price: number;
  description: string;

  constructor(name: string, price: number, description: string) {
    this.name = name;
    this.price = price;
    this.description = description;
  }
}

class Bmw implements Car {
  name: string;
  price: number;
  description: string;

  constructor(name: string, price: number, description: string) {
    this.name = name;
    this.price = price;
    this.description = description;
  }
}

class MercedesFactory implements CarFactory {
  constructor() { 

  }

  create(name: string): Car | null {
    switch (name) {
      case C300:
        return new Mercedes(name, 100000, name);
      case MAYBACH:
        return new Mercedes(name, 500000, name);
    }
    return null;
  }
}

class BmwFactory implements CarFactory {
  constructor() { 

  }

  create(name: string): Car | null {
    switch (name) {
      case X5:
        return new Bmw(name, 100000, name);
      case X6:
        return new Bmw(name, 200000, name);
    }
    return null;
  }
}

class CarAbstractFactory implements AbstractFactory {
  static create(type: string): CarFactory | null {
    switch (type) {
      case MERCEDES:
        return new MercedesFactory();
      case BMW:
        return new BmwFactory();
    }
    return null;
  }
}

const mercedesFactory: CarFactory | null = CarAbstractFactory.create(MERCEDES);
const c300: Car | null = mercedesFactory!.create(C300);
const mayback: Car | null = mercedesFactory!.create(MAYBACH);

const bmwFactory: CarFactory | null = CarAbstractFactory.create(BMW);
const x5: Car | null = bmwFactory!.create(X5);
const x6: Car | null = bmwFactory!.create(X6);

console.log(c300);
console.log(mayback);
console.log(x5);
console.log(x6);


