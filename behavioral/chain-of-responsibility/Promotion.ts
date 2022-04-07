interface Promotion {
  next: any;
  setNext(fn: any): void;
  execute(products: any): any;
}

interface Engine {
  products: any[];
  calculate(): any;
}

class NumberPromotion implements Promotion {
  next: any;

  constructor() {
    this.next = null;
  }

  setNext(fn: any): void {
    this.next = fn;
  }

  execute(products: any): any {
    let discount = 0;
    if (products && products.length >= 2) {
      discount = 0.5;
    }
    return discount + (this.next ? this.next.execute(products) : 0);
  }

}

class PricePromotion implements Promotion {
  next: any;

  constructor() {
    this.next = null;
  }

  setNext(fn: any): void {
    this.next = fn;
  }

  execute(products: any): any {
    let discount = 0;
    let totalPrice = 0;
    for (const product of products) {
      totalPrice = totalPrice + product.price;
    }
    if (totalPrice >= 5000) {
      discount = 0.2;
    }
    return discount + (this.next ? this.next.execute(products) : 0);
  }

}

class PromotionEngine implements Engine {
  products: any[];

  constructor(products: any[]) {
    this.products = products;
  }

  calculate(): any {
    const numberPromotion = new NumberPromotion();
    const pricePromotion = new PricePromotion();
    numberPromotion.setNext(pricePromotion);
    return numberPromotion.execute(this.products);
  }
}

const products = [
  {
    id: 1,
    price: 2000
  },
  {
    id: 2,
    price: 3000
  }
];

const engine = new PromotionEngine(products);
console.log(engine.calculate());