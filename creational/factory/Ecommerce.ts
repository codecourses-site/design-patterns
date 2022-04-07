const IPHONE = 'IPHONE';
const IPAD = 'IPAD';

interface AppleProduct {
  name: string;
  price: number;
  description: string;
  toString(): string;
}

class Iphone implements AppleProduct {
  public name: string;
  public price: number;
  public description: string;

  constructor(name: string, price: number, description: string) {
    this.name = name;
    this.price = price;
    this.description = description;
  }

  public toString(): string {
    return `${this.name} - ${this.price} - ${this.description}`;
  }

}

class Ipad implements AppleProduct {
  public name: string;
  public price: number;
  public description: string;

  constructor(name: string, price: number, description: string) {
    this.name = name;
    this.price = price;
    this.description = description;
  }

  public toString(): string {
    return `${this.name} - ${this.price} - ${this.description}`;
  }
}

class AppleProductFactory {
  static create(type: string): AppleProduct | null {
    switch (type) {
      case IPHONE:
        return new Iphone('Iphone', 2000, 'This is an Iphone');
      case IPAD:
        return new Ipad('Ipad', 2000, 'This is an Ipad');
    }
    return null;
  }
}

const iphone = AppleProductFactory.create(IPHONE);
const ipad = AppleProductFactory.create(IPAD);

console.log(iphone ? iphone.toString() : iphone);
console.log(ipad ? ipad.toString() : ipad);
