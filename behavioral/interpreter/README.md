# Behavioral Pattern - Interpreter Pattern.

<img src="../../screenshots/screenshot.jpeg" alt="design-patterns"/>

> Click :star: if you like the project. Pull Request are highly appreciated

This is the seventh part of my series (23 GoF Design Patterns). My series will help you understand design patterns by building real projects. For this reason, you can see the places in which each pattern could be applied. I want to focus on learning by doing instead of talking too much about theories.

I'm Hiep. I work as a full-time software engineer. Most of my open-source projects are focused on one thing - to help people learn 📚.

> If the repository is useful, please help me share the post and give me a :star: It will make me feel the motivation to work even harder. I will try to make many open sources and share them with the community.

## **Table of Contents**

| No. | Topics                                           |
| --- | ------------------------------------------------ |
| 1   | [Definition.](#definition)                       |
| 2   | [Scenarios.](#scenarios)                         |
| 3   | [Building a Calculator.](#building-a-calculator) |
| 4   | [Result.](#result)                               |

<a id="definition"></a>

## 1. Definition.

An interpreter pattern is used to implements a specialized language.

<a id="scenarios"></a>

## 2. Scenarios.

We need to build a calculation with two simple operations - sum, minus.

We will build the feature by using **Interpreter** pattern. However, we need to define the objects which are friendly with the end-users such as Num, Sum, Min so that the end-users can understand their purposes directly without searching anything.

<a id="building-a-calculator"></a>

## 3. Building a Calculator.

Please follow the below steps to create the calculator

Step 1: Define interfaces to create types for the application.

```js
interface INum {
  value: any;
  interpret(): any;
}

interface ISum {
  left: any;
  right: any;
  interpret(): any;
}

interface IMinus {
  left: any;
  right: any;
  interpret(): any;
}
```

> Note: as we can see, the end-users what will be happened behind the scene, the users just can trigger the corresponding functions by using the `interpret()` methods.

Step 2: Define the corresponding class for each interface.

```js
class Num implements INum {
  value: any;

  constructor(value: any) {
    this.value = value;
  }

  interpret(): any {
    return this.value;
  }
}

class Sum implements ISum {
  left: any;
  right: any;

  constructor(left: any, right: any) {
    this.left = left;
    this.right = right;
  }

  interpret(): any {
    return this.left.interpret() + this.right.interpret();
  }
}

class Minus implements IMinus {
  left: any;
  right: any;

  constructor(left: any, right: any) {
    this.left = left;
    this.right = right;
  }

  interpret(): any {
    return this.left.interpret() - this.right.interpret();
  }
}
```

Our full source code will look like this:

```js
interface INum {
  value: any;
  interpret(): any;
}

interface ISum {
  left: any;
  right: any;
  interpret(): any;
}

interface IMinus {
  left: any;
  right: any;
  interpret(): any;
}

class Num implements INum {
  value: any;

  constructor(value: any) {
    this.value = value;
  }

  interpret(): any {
    return this.value;
  }
}

class Sum implements ISum {
  left: any;
  right: any;

  constructor(left: any, right: any) {
    this.left = left;
    this.right = right;
  }

  interpret(): any {
    return this.left.interpret() + this.right.interpret();
  }
}

class Minus implements IMinus {
  left: any;
  right: any;

  constructor(left: any, right: any) {
    this.left = left;
    this.right = right;
  }

  interpret(): any {
    return this.left.interpret() - this.right.interpret();
  }
}

const left = new Num(1);
const right = new Num(2);

const output = new Sum(new Sum(left, right), new Minus(left, right));
console.log(output.interpret());
```

<a id="result"></a>

## 4. Result.

```js
2;
```

The above result describes our **Interpreter Pattern**.

By using design patterns, we can understand the core concepts and make our code more readable and cleaner. I hope that the post can help you understand about **Interpreter** pattern.

Thanks and Best Regards, \
Hiep.
