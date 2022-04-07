# Behavioral Pattern - Interpreter Pattern.

<img src="../../screenshots/screenshot.jpeg" alt="design-patterns"/>

> Click :star: if you like the project. Pull Request are highly appreciated

This is the eighth part of my series (23 GoF Design Patterns). My series will help you understand design patterns by building real projects. For this reason, you can see the places in which each pattern could be applied. I want to focus on learning by doing instead of talking too much about theories.

I'm Hiep. I work as a full-time software engineer. Most of my open-source projects are focused on one thing - to help people learn 📚.

> If the repository is useful, please help me share the post and give me a :star: It will make me feel the motivation to work even harder. I will try to make many open sources and share them with the community.

## **Table of Contents**

| No. | Topics                                             |
| --- | -------------------------------------------------- |
| 1   | [Definition.](#definition)                         |
| 2   | [Scenarios.](#scenarios)                           |
| 3   | [Builing Tinder Profile](#building-tinder-profile) |
| 4   | [Result.](#result)                                 |

<a id="definition"></a>

## 1. Definition.

Iterator accesses the elements of an object sequentially without exposing its underlying representation.

<a id="scenarios"></a>

## 2. Scenarios.

We can imagine that we are using Tinder. In Tinder, we can view the list of suggested profiles. We can traverse that list to find our ideal profiles.

To build this feature, we use the **Iterator** pattern.

<a id="building-tinder-profile"></a>

## 3. Builing Tinder Profile

Please follow the below steps to create the logic of traversing the list.

Step 1: Define the `profile` interface. The interface defines the properties that will be needed for a Tinder profile. You can feel free to add more properties, of course. In this tutorial, the profile just has the `name` property, and the `gender` property.

```js
interface IProfile {
  name: string;
  gender: string;
}
```

Step 2: Define the `Iterator` interface. This interface contains the following properties/methods:

- index: the current index of the list.
- data: the list of data set that needs to be traversed.
- next(): return the current value of the current index.
- hasNext(): check the last element has been consumed, or not.

```js
interface Iiterator {
  index: number;
  data: any[];
  next(): any;
  hasNext(): boolean;
}
```

Step 3: Define the `Profile` class that implements the `profile` interface.

```js
class Profile implements IProfile {
  name: string;
  gender: string;

  constructor(name: string, gender: string) {
    this.name = name;
    this.gender = gender;
  }
}
```

> Each object, which is created by this class, corresponds to a Tinder profile.

Step 4: Define the `ProfileIterator` class that implements the `Iterator` interface.

```js
class ProfileIterator implements Iiterator {
  index: number;
  data: any[];

  constructor(data: any[]) {
    this.index = 0;
    this.data = data;
  }

  next() {
    return this.data[this.index++];
  }

  hasNext(): boolean {
    return this.index < this.data.length;
  }
}
```

Our full source code will look like this:

```js
interface IProfile {
  name: string;
  gender: string;
}

interface Iiterator {
  index: number;
  data: any[];
  next(): any;
  hasNext(): boolean;
}

class Profile implements IProfile {
  name: string;
  gender: string;

  constructor(name: string, gender: string) {
    this.name = name;
    this.gender = gender;
  }
}

class ProfileIterator implements Iiterator {
  index: number;
  data: any[];

  constructor(data: any[]) {
    this.index = 0;
    this.data = data;
  }

  next() {
    return this.data[this.index++];
  }

  hasNext(): boolean {
    return this.index < this.data.length;
  }
}

const profiles: Profile[] = [
  new Profile("Anna", "Female"),
  new Profile("Camila", "Female"),
  new Profile("Lucy", "Female"),
  new Profile("Evelyn", "Female"),
  new Profile("Jane", "Female"),
];

const profileIterator = new ProfileIterator(profiles);

while (profileIterator.hasNext()) {
  console.log(profileIterator.next());
}
```

<a id="result"></a>

## 4. Result.

```js
Profile { name: 'Anna', gender: 'Female' }
Profile { name: 'Camila', gender: 'Female' }
Profile { name: 'Lucy', gender: 'Female' }
Profile { name: 'Evelyn', gender: 'Female' }
Profile { name: 'Jane', gender: 'Female' }
```

The above result describes our **Iterator Pattern**.

By using design patterns, we can understand the core concepts and make our code more readable and cleaner. I hope that the post can help you understand about **Iterator** pattern.

Thanks and Best Regards, \
Hiep.
