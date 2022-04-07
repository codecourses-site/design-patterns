# Behavioral Pattern - Memento Pattern.

<img src="../../screenshots/screenshot.jpeg" alt="design-patterns"/>

> Click :star: if you like the project. Pull Request are highly appreciated

This is the tenth part of my series (23 GoF Design Patterns). My series will help you understand design patterns by building real projects. For this reason, you can see the places in which each pattern could be applied. I want to focus on learning by doing instead of talking too much about theories.

I'm Hiep. I work as a full-time software engineer. Most of my open-source projects are focused on one thing - to help people learn 📚.

> If the repository is useful, please help me share the post and give me a :star: It will make me feel the motivation to work even harder. I will try to make many open sources and share them with the community.

## **Table of Contents**

| No. | Topics                              |
| --- | ----------------------------------- |
| 1   | [Definition.](#definition)          |
| 2   | [Scenarios.](#scenarios)            |
| 3   | [Building a Undo](#building-a-undo) |
| 4   | [Result.](#result)                  |

<a id="definition"></a>

## 1. Definition.

**Memento** provides the ability to restore an object to its previous state (undo).

<a id="scenarios"></a>

## 2. Scenarios.

We can imagine that we are building a undo feature that is similar to `Ctrl + Z`. We will store their steps, and restore any step that we want.

To build this feature, we use the **Memento** pattern.

<a id="building-a-undo"></a>

## 3. Building a Undo

To build this feature, please follow the below steps:

Step 1: Define the **IMemento** interface to define the type of the memento. A memento has only one property - the `value`. It is used to store the value of the **memento**.

```js
interface IMemento {
  value: any;
}
```

Step 2: Define the **IStore** interface, the store will contain all of the states. For this reason, we can undo the actions by using the store object. The **IStore** interface contains two methods - the `store` and `restore`. The `store` method is used to store new memento, the `restore` method is used to restore any step that we want.

```js
interface IStore {
  store(memento: IMemento): IMemento;
  restore(memento: IMemento): any;
}
```

Step 3: Define the **IUndo** interface, the **IUndo** interface is used to store the list of mementos.

```js
interface IUndo {
  mementos: IMemento[];
  addMemento(memento: IMemento): void;
  getMemento(index: number): IMemento;
}
```

Step 4: We need to define the `Memento` class, `Store` class, `Undo` class.

```js
class Memento implements IMemento {
  value: any;

  constructor(value: any) {
    this.value = value;
  }
}

class Store implements IStore {
  store(value: any): IMemento {
    return new Memento(value);
  }

  restore(memento: IMemento): any {
    return memento.value;
  }
}

class Undo implements IUndo {
  mementos: IMemento[] = [];

  addMemento(memento: IMemento): void {
    this.mementos.push(memento);
  }

  getMemento(index: number): IMemento {
    return this.mementos[index];
  }
}
```

Our full source code will look like this:

```js
interface IMemento {
  value: any;
}

interface IStore {
  store(value: any): IMemento;
  restore(memento: IMemento): any;
}

interface IUndo {
  mementos: IMemento[];
  addMemento(memento: IMemento): void;
  getMemento(index: number): IMemento;
}

class Memento implements IMemento {
  value: any;

  constructor(value: any) {
    this.value = value;
  }
}

class Store implements IStore {
  store(value: any): IMemento {
    return new Memento(value);
  }

  restore(memento: IMemento): any {
    return memento.value;
  }
}

class Undo implements IUndo {
  mementos: IMemento[] = [];

  addMemento(memento: IMemento): void {
    this.mementos.push(memento);
  }

  getMemento(index: number): IMemento {
    return this.mementos[index];
  }
}

const store = new Store();
const undo = new Undo();

undo.addMemento(store.store("Step 1"));
undo.addMemento(store.store("Step 2"));
undo.addMemento(store.store("Step 3"));

const step2 = store.restore(undo.getMemento(1));
console.log(step2);
```

<a id="result"></a>

## 4. Result.

```js
Step 2
```

The above result describes our **Memento Pattern**.

By using design patterns, we can understand the core concepts and make our code become more readable and cleaner. I hope that the post can help you understand about **Memento** pattern.

Thanks and Best Regards, \
Hiep.
