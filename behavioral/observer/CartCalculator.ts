interface IProduct {
  price: number;
  actions: any[];

  setBasePrice(price: number): void;
  register(observer: any): void;
  unregister(observer: any): void;
  notifyAll(): void;
}

interface IObserver { 
  update(product: IProduct): void;
}

class Product implements IProduct {
  price: number = 0;
  actions: any[] = [];

  setBasePrice(price: number): void {
    this.price = price;
    this.notifyAll();
  }

  register(observer: any): void {
    this.actions.push(observer);
  }

  unregister(observer: any): void {
    this.actions = this.actions.filter(element => !(element instanceof observer));
  }

  notifyAll(): void {
    this.actions.forEach((action) => action.update(this));
  }
}

class Fee implements IObserver {
  update(product: IProduct): void {
    product.price = product.price * 1.2;
  }
}

class Shipping implements IObserver { 
  update(product: IProduct): void { 
    product.price = product.price * 1.5;
  }
}

const product = new Product();
const fee = new Fee();
const shipping = new Shipping();
product.register(fee);
product.register(shipping);
product.setBasePrice(120);
console.log(product);

product.unregister(Shipping);
product.setBasePrice(120);
console.log(product);