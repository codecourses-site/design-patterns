# Behavioral Pattern - Observer Pattern.

<img src="../../screenshots/screenshot.jpeg" alt="design-patterns"/>

> Click :star: if you like the project. Pull Request are highly appreciated

This is the eleventh part of my series (23 GoF Design Patterns). My series will help you understand design patterns by building real projects. For this reason, you can see the places in which each pattern could be applied. I want to focus on learning by doing instead of talking too much about theories.

I'm Hiep. I work as a full-time software engineer. Most of my open-source projects are focused on one thing - to help people learn 📚.

> If the repository is useful, please help me share the post and give me a :star: It will make me feel the motivation to work even harder. I will try to make many open sources and share them with the community.

## **Table of Contents**

| No. | Topics                                                    |
| --- | --------------------------------------------------------- |
| 1   | [Definition.](#definition)                                |
| 2   | [Scenarios.](#scenarios)                                  |
| 3   | [Building a Cart Calculator](#building-a-cart-calculator) |
| 4   | [Result.](#result)                                        |

<a id="definition"></a>

## 1. Definition.

**Observer** is a publish/subscribe pattern that allows a number of observer objects to see an event.

<a id="scenarios"></a>

## 2. Scenarios.

We can imagine that we are building a cart calculator, we will calculate the base price for the products.

To build this feature, we use the **Observer** pattern.

<a id="building-a-cart-calculator"></a>

## 3. Builing a Cart Calculator

To build this feature, please follow the below steps:

Step 1: Define the **IProduct** interface that will help us define the product type. It includes some properties and methods:

- price: the product's price.
- actions: contain the list of overseas.
- setBasePrice: set the base price for the product.
- register: register the observer.
- unregister: unregister the observer.
- notifyAll: sent events to all of the observers.

```js
interface IProduct {
  price: number;
  actions: any[];

  setBasePrice(price: number): void;
  register(observer: any): void;
  unregister(observer: any): void;
  notifyAll(): void;
}
```

Step 2: Define the **IObserver** interface that will help us define the Observer type. It just includes the **update** method. It means whenever the product sent an event to its observers. The observers will call the update method to perform the corresponding actions.

```js
interface IObserver {
  update(product: IProduct): void;
}
```

Step 3: Define the **Product** class, and the **Observer** class

```js
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
    this.actions = this.actions.filter(
      (element) => !(element instanceof observer)
    );
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
```

Our full source code will look like this:

```js
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
    this.actions = this.actions.filter(
      (element) => !(element instanceof observer)
    );
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
```

<a id="result"></a>

## 4. Result.

```js
Product { price: 216, actions: [ Fee {}, Shipping {} ] }
Product { price: 144, actions: [ Fee {} ] }
```

The above result describes our **Observer Pattern**.

By using design patterns, we can understand the core concepts and make our code become more readable and cleaner. I hope that the post can help you understand about **Observer** pattern.

Thanks and Best Regards, \
Hiep.
