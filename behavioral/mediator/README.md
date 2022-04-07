# Behavioral Pattern - Mediator Pattern.

<img src="../../screenshots/screenshot.jpeg" alt="design-patterns"/>

> Click :star: if you like the project. Pull Request are highly appreciated

This is the ninth part of my series (23 GoF Design Patterns). My series will help you understand design patterns by building real projects. For this reason, you can see the places in which each pattern could be applied. I want to focus on learning by doing instead of talking too much about theories.

I'm Hiep. I work as a full-time software engineer. Most of my open-source projects are focused on one thing - to help people learn 📚.

> If the repository is useful, please help me share the post and give me a :star: It will make me feel the motivation to work even harder. I will try to make many open sources and share them with the community.

## **Table of Contents**

| No. | Topics                                     |
| --- | ------------------------------------------ |
| 1   | [Definition.](#definition)                 |
| 2   | [Scenarios.](#scenarios)                   |
| 3   | [Building a Airport](#building-a-air-port) |
| 4   | [Result.](#result)                         |

<a id="definition"></a>

## 1. Definition.

**Mediator** allows loose coupling between classes by being the only class that has detailed knowledge of their methods.

<a id="scenarios"></a>

## 2. Scenarios.

We can imagine that we are using an airport. The pilots can talk to the traffic tower to get their current positions. However, the pilots should not know how the traffic tower can get their current positions. We achieve the loose coupling between the **Airplane** class, and the **TrafficTower** class.

To build this feature, we use the **Mediator** pattern.

<a id="building-a-air-port"></a>

## 3. Builing a Air Port

To build this feature, please follow the below steps:

Step 1: Define the **IAirplane** interface to define the airplane type. It contains two properties and one method - the current position, the traffic tower instance to communicate with, and the request positions method.

```js
interface IAirPlain {
  position: number;
  trafficTower: ITrafficTower;
  requestPositions(): number[];
}
```

Step 2: The **ITrafficTower** interface to define the traffic tower type. It contains the list of airplanes and the request positions method.

```js
interface ITrafficTower {
  airplanes: IAirPlain[];
  requestPositions(): number[];
}
```

Step 3: Define the **Airplane** class that implements the **IAirplane** interface.

```js
class Airplane implements IAirPlain {
  position: number;
  trafficTower: ITrafficTower;

  constructor(position: number, trafficTower: ITrafficTower) {
    this.position = position;
    this.trafficTower = trafficTower;
    this.trafficTower.airplanes.push(this);
  }

  requestPositions(): number[] {
    return this.trafficTower.requestPositions();
  }
}
```

> Note: we can see here. In this case, the airplanes need to get their current positions, they need to call the request positions method. Inside that method, we will reuse the traffic tower instance to query the current positions of the airplanes. Therefore, the airplanes will not know the details of how we can get their current positions.

Step 4: As mentioned above, the traffic tower is the only class that knows about the details. Please create the **TrafficTower** class that implements the **ITrafficTower** interface.

```js
class TrafficTower implements ITrafficTower {
  airplanes: IAirPlain[] = [];

  requestPositions(): number[] {
    return this.airplanes.map((airplane) => airplane.position);
  }
}
```

Our full source code will look like this:

```js
interface IAirPlain {
  position: number;
  trafficTower: ITrafficTower;
  requestPositions(): number[];
}

interface ITrafficTower {
  airplanes: IAirPlain[];
  requestPositions(): number[];
}

class Airplane implements IAirPlain {
  position: number;
  trafficTower: ITrafficTower;

  constructor(position: number, trafficTower: ITrafficTower) {
    this.position = position;
    this.trafficTower = trafficTower;
    this.trafficTower.airplanes.push(this);
  }

  requestPositions(): number[] {
    return this.trafficTower.requestPositions();
  }
}

class TrafficTower implements ITrafficTower {
  airplanes: IAirPlain[] = [];

  requestPositions(): number[] {
    return this.airplanes.map((airplane) => airplane.position);
  }
}

const boeing = new Airplane(311295, new TrafficTower());
console.log(boeing.requestPositions());
```

<a id="result"></a>

## 4. Result.

```js
[311295];
```

The above result describes our **Mediator Pattern**.

By using design patterns, we can understand the core concepts and make our code more readable and cleaner. I hope that the post can help you understand about **Mediator** pattern.

Thanks and Best Regards, \
Hiep.
