# Creational Pattern - Factory Pattern.

<img src="../../screenshots/screenshot.jpeg" alt="design-patterns"/>

> Click :star: if you like the project. Pull Requests are highly appreciated.

This is the second part of my series (23 GoF Design Patterns). My series will help you understand design patterns by building real projects. For this reason, you can see the places in which each pattern could be applied. I want to focus on learning by doing instead of talking too much about theories.

I'm Hiep. I work as a full-time software engineer. Most of my open-source projects are focused on one thing - to help people learn 📚.

## **Table of Contents**

| No. | Topics                                                                             |
| --- | ---------------------------------------------------------------------------------- |
| 1   | [Definition.](#definition)                                                         |
| 2   | [Scenarios.](#scenarios)                                                           |
| 3   | [Building a Ecommerce Website for Apple.](#building-a-ecommerce-website-for-apple) |
| 4   | [Result.](#result)                                                                 |

<a id="definition"></a>

## 1. Definition.

A factory pattern defines an interface for creating a single object, but lets subclasses decide which class to instantiate. Factory Method lets a class defer instantiation to subclasses.

<a id="scenarios"></a>

## 2. Scenarios.

We can imagine that we want to build an eCommerce website for Apple. When the users visit our website and input product names, we should return Apple's products based on input names.

Example: Henry visits our website, he inputs 'Iphone12', our website should return the information of Iphone12 to him. In the second time, he inputs 'Ipad Pro 2021', our website should return the information of 'Ipad Pro 2012'.

> In fact, our website will return the objects based on input names. It sounds like the definition of a factory pattern. We will build the system by applying a factory pattern.

<a id="building-a-ecommerce-website-for-apple"></a>

## 3. Building a Ecommerce Website for Apple.

Step 1: Create **AppleProduct** interface to store the information of Apple's products.

```js
interface AppleProduct {
  name: string;
  price: number;
  description: string;
  toString(): string;
}
```

> Note: We define the `toString` method to log the information of the selected product.

Step 2: Create **Iphone** class to implement the AppleProduct interface.

```js
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
```

Step 3: Create **Ipad** class to implement the AppleProduct interface.

```js
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
```

Step 3: Create **AppleProductFactory** class to return the corresponding product based on the input type.

```js
class AppleProductFactory {
  static create(type: string): AppleProduct | null {
    switch (type) {
      case IPHONE:
        return new Iphone("Iphone", 2000, "This is an Iphone");
      case IPAD:
        return new Ipad("Ipad", 2000, "This is an Ipad");
    }
    return null;
  }
}
```

> We define the **create** method as **static** because **static** method can be accessed directly by using the class's name.
>
> Example: We can write
>
> ```js
> AppleProductFactory.create("Iphone 12");
> ```
>
> Instead of
>
> ```js
> const appleProductFactory = new AppleProductFactory();
> appleProductFactory.create("Iphone 12");
> ```

Step 4: Define two constants that correspond to the product's types - IPHONE and IPAD.

```js
const IPHONE = "IPHONE";
const IPAD = "IPAD";
```

Our full source code will look like this:

```js
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
```

<a id="result"></a>

## 4. Result.

```js
Iphone 12 - 2000 - This is Iphone 12
Ipad Pro 2021 - 2000 - This is Ipad Pro 2021
```

The above result describes that our **AppleProductFactory** returns the information of products based on input names. Factory pattern helps us hide the logic of constructing objects.

By using design patterns, we can understand the core concepts and make our code more readable and cleaner. I hope that the post can help you understand about Factory pattern.

Thanks and Best Regards, \
Hiep Tuan Le
