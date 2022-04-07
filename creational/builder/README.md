# Creational Pattern - Builder Pattern.

<img src="../../screenshots/screenshot.jpeg" alt="design-patterns"/>

> Click :star: if you like the project. Pull Request are highly appreciated

This is the third part of my series (23 GoF Design Patterns). My series will help you understand design patterns by building real projects. For this reason, you can see the places in which each pattern could be applied. I want to focus on learning by doing instead of talking too much about theories.

I'm Hiep. I work as a full-time software engineer. Most of my open-source projects are focused on one thing - to help people learn 📚.

> If the repository is useful, please help me share the post and give me a :star: It will make me feel the motivation to work even harder. I will try to make many open sources and share them with the community.

## **Table of Contents**

| No. | Topics                                             |
| --- | -------------------------------------------------- |
| 1   | [Definition.](#definition)                         |
| 2   | [Scenarios.](#scenarios)                           |
| 3   | [Building a Bakery Shop.](#building-a-bakery-shop) |
| 4   | [Result.](#result)                                 |

<a id="definition"></a>

## 1. Definition.

Builder pattern will help you to separate the construction of a complex object from its representations. We can reuse the same construction process to create various representations.

> We can feel free to add properties to an object in different ways by using Javascript, for example, you can use object literal syntax and write something like this:
>
> ```js
> const cake = {};
> cake.hasSugar = true;
> cake.hasStrawberry = true;
> ...
> ```
>
> However, we should build by ourselves to understand the core concepts. Therefore, we will feel more interested in programming and increase logical thinking.

<a id="scenarios"></a>

## 2. Scenarios.

We can imagine that we have a bakery shop. We need to make different cakes by following the requirements of the customers.

As mentioned before, We can achieve the result in different ways in Javascript. However, we will create the solution by ourselves by using the Builder pattern.

<a id="building-a-bakery-shop"></a>

## 3. Building a Bakery Shop.

Our Cake class will be looked like this:

```js
class Cake {
  hasSugar?: boolean;
  hasStrawberry?: boolean;

  constructor() {
  }
}

class CakeBuilder {
  cake: Cake;

  constructor() {
    this.cake = new Cake();
  }

  withSugar(hasSugar: boolean): CakeBuilder {
    this.cake.hasSugar = hasSugar;
    return this;
  }

  withStrawberry(hasStrawberry: boolean): CakeBuilder {
    this.cake.hasStrawberry = hasStrawberry;
    return this;
  }

  build(): Cake {
    return this.cake;
  }
}

const cakeBuilder = new CakeBuilder();

const cake: Cake = cakeBuilder
  .withSugar(true)
  .withStrawberry(true)
  .build();

console.log(cake);
```

Step 1: We create **Cake** class with two properties - **hasSugar** and **hasStrawberry** properties (You can add more properties for your cake, two properties are used for the demo purposes :smile:).

Step 2: We create **CakeBuilder** class. In the constructor of the class, a new cake object will be created. On the other hand, we create methods to build the corresponding properties for the cake object, for example, we have **withSugar** to build **hasSugar** property, **withStrawberry** to build **hasStrawberry** property and so on. If you have many properties, you just need to create more methods to build values for those properties.

Step 3: We create **build** method. The method will not be used to build value for any properties. It is used to return the final cake instance.

Step 4: To use the cake builder, we need to create a new object of **CakeBuilder** class. By invoking different methods from **cakeBuilder** object, we are building properties for our cake. Please do not forget about **build** method. It will return the final cake for us. The last but not least, we assign the final result to **cake** variable and then you can do everything you want with your cake.

```js
const cakeBuilder = new CakeBuilder();

const cake: Cake = cakeBuilder.withSugar(true).withStrawberry(true).build();
```

<a id="result"></a>

## 4. Result.

```js
Cake { hasSugar: true, hasStrawBerry: true }
```

The above result describes that the final cake is created by applying the Builder pattern.

By using design patterns, we can understand the core concepts and make our code more readable and cleaner. I hope that the post can help you understand about Builder pattern.

Thanks and Best Regards,
Hiep Tuan Le
