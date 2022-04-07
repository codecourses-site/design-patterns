# Behavioral Pattern - State Pattern.

<img src="../../screenshots/screenshot.jpeg" alt="design-patterns"/>

> Click :star: if you like the project. Pull Request are highly appreciated

This is the twelfth part of my series (23 GoF Design Patterns). My series will help you understand design patterns by building real projects. For this reason, you can see the places in which each pattern could be applied. I want to focus on learning by doing instead of talking too much about theories.

I'm Hiep. I work as a full-time software engineer. Most of my open-source projects are focused on one thing - to help people learn 📚.

> If the repository is useful, please help me share the post and give me a :star: It will make me feel the motivation to work even harder. I will try to make many open sources and share them with the community.

## **Table of Contents**

| No. | Topics                                  |
| --- | --------------------------------------- |
| 1   | [Definition.](#definition)              |
| 2   | [Scenarios.](#scenarios)                |
| 3   | [Building an Order](#building-an-order) |
| 4   | [Result.](#result)                      |

<a id="definition"></a>

## 1. Definition.

**State** allows an object to alter its behavior when its internal state changes.

<a id="scenarios"></a>

## 2. Scenarios.

We can imagine that we are building an order, and we need to keep track of its status - waiting for payment, shipping, delivery.

To build this feature, we use the **State** pattern.

<a id="building-an-order"></a>

## 3. Building an Order

To build this feature, please follow the below steps:

Step 1: Firstly, we need to define types for this application. There are two types - **OrderStatus**, **Order**

- **OrderStatus** will have two properties and one method.
  - **name**: contains the name of the order status.
  - **nextStatus**: contains the next status which is after the current status.
  - **next**: the next method is used to change the current status to the next status.
- **Order** will have one property
  - **state**: the current state of the order.

```js
interface IOrderStatus {
  name: string;
  nextStatus?: IOrderStatus;

  next(): IOrderStatus | undefined;
}

interface IOrder {
  state: IOrderStatus | undefined;
}
```

Step 2: Secondly, we need to define instances for this application by specifying some classes

- **Waiting For Payment**: it indicates the waiting for payment status.
- **Shipping**: it indicates that the order is shipping to the customers.
- **Delivered**: it indicates that the order is shipped to the customers.
- **Order**: it contains the information of the order including its state.

```js
class WaitingForPayment extends OrderStatus implements IOrderStatus {
  constructor() {
    super("waitingForPayment", new Shipping());
  }
}

class Shipping extends OrderStatus implements IOrderStatus {
  constructor() {
    super("shipping", new Delivered());
  }
}

class Delivered extends OrderStatus implements IOrderStatus {
  constructor() {
    super("delivered");
  }
}

class Order implements IOrder {
  state: IOrderStatus | undefined;

  constructor(state: IOrderStatus) {
    this.state = state;
  }

  next() {
    this.state = this.state ? this.state.next() : this.state;
    return this.state;
  }
}
```

Our full source code will look like this:

```js
interface IOrderStatus {
  name: string;
  nextStatus?: IOrderStatus;

  next(): IOrderStatus | undefined;
}

interface IOrder {
  state: IOrderStatus | undefined;
}

class OrderStatus implements IOrderStatus {
  name: string;
  nextStatus?: IOrderStatus;

  constructor(name: string, nextStatus?: IOrderStatus) {
    this.name = name;
    this.nextStatus = nextStatus;
  }

  next(): IOrderStatus | undefined {
    return this.nextStatus;
  }
}

class WaitingForPayment extends OrderStatus implements IOrderStatus {
  constructor() {
    super('waitingForPayment', new Shipping());
  }
}

class Shipping extends OrderStatus implements IOrderStatus {
  constructor() {
    super('shipping', new Delivered());
  }
}

class Delivered extends OrderStatus implements IOrderStatus {
  constructor() {
    super('delivered');
  }
}

class Order implements IOrder {
  state: IOrderStatus | undefined;

  constructor(state: IOrderStatus) {
    this.state = state;
  }

  next() {
    this.state = this.state ? this.state.next() : this.state;
    return this.state;
  }
}

const order = new Order(new WaitingForPayment());
console.log(order.next());
console.log(order.next());
console.log(order.next());
```

<a id="result"></a>

## 4. Result.

```js
Shipping {
  name: 'shipping',
  nextStatus: Delivered { name: 'delivered', nextStatus: undefined }
}
Delivered { name: 'delivered', nextStatus: undefined }
undefined
```

The above result describes our **State Pattern**.

By using design patterns, we can understand the core concepts and make our code become more readable and cleaner. I hope that the post can help you understand about **State** pattern.

Thanks and Best Regards, \
Hiep.
