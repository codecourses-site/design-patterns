# Behavioral Pattern - Command Pattern.

<img src="../../screenshots/screenshot.jpeg" alt="design-patterns"/>

> Click :star: if you like the project. Pull Request are highly appreciated

This is the sixth part of my series (23 GoF Design Patterns). My series will help you understand design patterns by building real projects. For this reason, you can see the places in which each pattern could be applied. I want to focus on learning by doing instead of talking too much about theories.

I'm Hiep. I work as a full-time software engineer. Most of my open-source projects are focused on one thing - to help people learn 📚.

> If the repository is useful, please help me share the post and give me a :star: It will make me feel the motivation to work even harder. I will try to make many open sources and share them with the community.

## **Table of Contents**

| No. | Topics                                           |
| --- | ------------------------------------------------ |
| 1   | [Definition.](#definition)                       |
| 2   | [Scenarios.](#scenarios)                         |
| 3   | [Building a Space Ship.](#building-a-space-ship) |
| 4   | [Result.](#result)                               |

<a id="definition"></a>

## 1. Definition.

The command pattern is used to create objects which encapsulate actions and parameters.

<a id="scenarios"></a>

## 2. Scenarios.

We can imagine that we are building a spaceship. In that space ship, we need to build a turbine, that turbine helps us to start/stop the space ship. Each time the captain presses the start/stop buttons. We need to execute the command to let the turbine knows what it needs to do.

We will build the feature by using **Command** pattern.

<a id="building-a-space-ship"></a>

## 3. Building a Space Ship.

Step 1: Create **Command** interface to define the command type for this application.

```js
interface Command {
  execute(): void;
}
```

Step 2: Create **Turbine** class. The turbine takes the responsibility for turning on/off the ship.

```js
class Turbine {
  state: boolean = false;

  on(state: boolean) {
    this.state = state;
  }

  off(state: boolean) {
    this.state = state;
  }
}
```

Step 3: Define the commands. In this case, we need to define the on command, and the off command.

```js
class OnCommand implements Command {
  private turbine: Turbine;

  constructor(turbine: Turbine) {
    this.turbine = turbine;
  }

  execute(): void {
    this.turbine.on(true);
  }
}

class OffCommand implements Command {
  private turbine: Turbine;

  constructor(turbine: Turbine) {
    this.turbine = turbine;
  }

  execute(): void {
    this.turbine.off(true);
  }
}
```

Step 4: Last but not least, we need to create the Ship.

```js
class Ship {
  private command: Command;

  constructor(command: Command) {
    this.command = command;
  }

  execute(): void {
    this.command.execute();
  }
}
```

> The ship will not know about the turbine. It means that the ship will not interact with the turbine directly. Everything will be executed via commands.

Our full source code will look like this:

```js
interface Command {
  execute(): void;
}

class Turbine {
  state: boolean = false;

  on(state: boolean) {
    this.state = state;
  }

  off(state: boolean) {
    this.state = state;
  }
}

class OnCommand implements Command {
  private turbine: Turbine;

  constructor(turbine: Turbine) {
    this.turbine = turbine;
  }

  execute(): void {
    this.turbine.on(true);
  }
}

class OffCommand implements Command {
  private turbine: Turbine;

  constructor(turbine: Turbine) {
    this.turbine = turbine;
  }

  execute(): void {
    this.turbine.off(true);
  }
}

class Ship {
  private command: Command;

  constructor(command: Command) {
    this.command = command;
  }

  execute(): void {
    this.command.execute();
  }
}

const turbine = new Turbine();
const onCommand = new OnCommand(turbine);
const ship = new Ship(onCommand);
ship.execute();
console.log(turbine.state);
```

<a id="result"></a>

## 4. Result.

```js
true;
```

The above result describes our **Command Pattern**.

By using design patterns, we can understand the core concepts and make our code more readable and cleaner. I hope that the post can help you understand about **Command** pattern.

Thanks and Best Regards, \
Hiep.
