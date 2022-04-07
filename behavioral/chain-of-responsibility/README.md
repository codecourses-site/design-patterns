# Behavioral Pattern - Chain of Responsibility Pattern.

<img src="../../screenshots/screenshot.jpeg" alt="design-patterns"/>

> Click :star: if you like the project. Pull Request are highly appreciated

This is the seventh part of my series (23 GoF Design Patterns). My series will help you understand design patterns by building real projects. For this reason, you can see the places in which each pattern could be applied. I want to focus on learning by doing instead of talking too much about theories.

I'm Hiep. I work as a full-time software engineer. Most of my open-source projects are focused on one thing - to help people learn 📚.

> If the repository is useful, please help me share the post and give me a :star: It will make me feel the motivation to work even harder. I will try to make many open sources and share them with the community.

## **Table of Contents**

| No. | Topics                                                       |
| --- | ------------------------------------------------------------ |
| 1   | [Definition.](#definition)                                   |
| 2   | [Scenarios.](#scenarios)                                     |
| 3   | [Building a Promotion Engine.](#building-a-promotion-engine) |
| 4   | [Result.](#result)                                           |

<a id="definition"></a>

## 1. Definition.

The chain of responsibilities pattern is used to delegates commands to a chain of processing objects.

<a id="scenarios"></a>

## 2. Scenarios.

We can imagine that we are building a promotion engine for an e-commerce website. In that project, we need to create a promotion engine for Black Friday. In this case, we have two promotions - **number promotion** & **price promotion**

- **Number promotion**: if the number of products, which are in the cart, is greater than 2, the total price will be discounted 50%.

- **Price promotion**: if the total price of the cart is greater than 5000, or equal to 5000, the total price will be discounted 20%

We will build the feature by using **Chain of Responsibility** pattern.

<a id="building-a-promotion-engine"></a>

## 3. Building a Promotion Engine.

Step 1: Create some interfaces to define the command types for this application.

```js
interface Promotion {
  next: any;
  setNext(fn: any): void;
  execute(products: any): any;
}

interface Engine {
  products: any[];
  calculate(): any;
}
```

> - Each processing object will implements **Promotion** interface, the main object is the promotion engine, it will implement the **Engine** interface.
>
> - Because we are building a chain of processing objects. Therefore, we need to define the **next** property to determine the next object in the chain. On the other hand, the **setNext** method is used to set the next processing object after the current processing object. The **execute** method is used to run the corresponding business logic for each processing object.

Step 2: After understanding the purposes of each property and method in the defined interfaces, we will define the **NumberPromotion** class, and the **PricePromotion** class.

```js
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
```

> The magic is `return discount + (this.next ? this.next.execute(products) : 0);`. At the return statement, we always check if there is the next processing object, we will continue the process, whereas we will stop the process, and return the result.

Step 3: We need to define the promotion engine class. This class will build the chain of processing objects. The end-users will not know about the chain because we wrap the chain inside the engine.

```js
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
```

Our full source code will look like this:

```js
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
    price: 2000,
  },
  {
    id: 2,
    price: 3000,
  },
];

const engine = new PromotionEngine(products);
console.log(engine.calculate());
```

<a id="result"></a>

## 4. Result.

```js
0.7;
```

The above result describes our **Chain of Responsibility Pattern**.

By using design patterns, we can understand the core concepts and make our code more readable and cleaner. I hope that the post can help you understand about **Chain of Responsibility** pattern.

Thanks and Best Regards, \
Hiep.
