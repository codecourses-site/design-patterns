# Creational Pattern - Abstract Factory Pattern.

<img src="../../screenshots/screenshot.jpeg" alt="design-patterns"/>

> Click :star: if you like the project. Pull Request are highly appreciated

This is the fifth part of my series (23 GoF Design Patterns). My series will help you understand design patterns by building real projects. For this reason, you can see the places in which each pattern could be applied. I want to focus on learning by doing instead of talking too much about theories.

I'm Hiep. I work as a full-time software engineer. Most of my open-source projects are focused on one thing - to help people learn 📚.

> If the repository is useful, please help me share the post and give me a :star: It will make me feel the motivation to work even harder. I will try to make many open sources and share them with the community.

## **Table of Contents**

| No. | Topics                                               |
| --- | ---------------------------------------------------- |
| 1   | [Definition.](#definition)                           |
| 2   | [Scenarios.](#scenarios)                             |
| 3   | [Building a Car Showroom.](#building-a-car-showroom) |
| 4   | [Result.](#result)                                   |

<a id="definition"></a>

## 1. Definition.

Abstract factory pattern provides an interface for creating families of related or dependent objects without specifying their concrete classes. In other words, **it is a factory of factories**.

<a id="scenarios"></a>

## 2. Scenarios.

We can imagine that we want to build a website for a car showroom. The car showroom contains different types of cars. The car showroom decides to create a feature that helps the end-users find the cars easier. The feature let the end-users input the car's type and the car's name which is belonging to that type.

The system should return the car's information based on input type and name.

Example: David visits our website, He inputs 'Mercedes' for the car's type and 'Maybach' for the car's name. Our website should return the information of 'Maybach' to him if it is existing in the car showroom.

We will build the feature by using **Abstract Factory** pattern.

<a id="building-a-car-showroom"></a>

## 3. Building a Car Showroom.

Step 1: Define **Car** interface to specify the properties that a car should have.

```js
interface Car {
  name: string;
  price: number;
  description: string;
}
```

Step 2: We will have different factories in this application such as Mercedes factory, BMW factory, and so on. We should define a common type for them. In this case, we define **CarFactory** interface.

```js
interface CarFactory {
  create(name: string): Car | null;
}
```

Step 3: We need to do the same thing for the abstract factory class by defining the **AbstractFactory** interface.

```js
interface AbstractFactory {}
```

Step 4: It is time to define the **Mercedes**, and **Bmw** classes.

```js
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
```

Step 5: Now we need to define the **MercedesFactory**, and **BmwFactory** like what we have done in the factory tutorial.

```js
class MercedesFactory implements CarFactory {
  constructor() {}

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
  constructor() {}

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
```

Step 6: Last but not least, we define the **CarAbstractFactory**. the abstract factory could be understood as the factory of factories.

```js
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
```

> We defined **create** method as static because the static method can be accessed directly by using the class's name.
>
> Example: We can write
>
> ```js
> CarAbstractFactory.getFactory(MERCEDES);
> ```
>
> Instead of
>
> ```js
> const carAbstractFactory = new CarAbstractFactory();
> carAbstractFactory.getFactory(MERCEDES);
> ```

Our full source code will look like this:

```js
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
```

<a id="result"></a>

## 4. Result.

```js
Mercedes { name: 'C300', price: 100000, description: 'C300' }
Mercedes { name: 'MAYBACH', price: 500000, description: 'MAYBACH' }
Bmw { name: 'X5', price: 100000, description: 'X5' }
Bmw { name: 'X6', price: 200000, description: 'X6' }
```

The above result describes that our **CarAbstractFactory** returns the factory based on input type and we can get the car by using that factory and input name.

By using design patterns, we can understand the core concepts and make our code more readable and cleaner. I hope that the post can help you understand about Abstract Factory pattern.

Thanks and Best Regards, \
Hiep.
