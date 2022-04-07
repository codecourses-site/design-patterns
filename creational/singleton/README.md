# Creational Pattern - Singleton Pattern.

<img src="../../screenshots/screenshot.jpeg" alt="design-patterns"/>

> Click :star: if you like the project. Pull Request are highly appreciated.

This is the first part of my series (23 GoF Design Patterns). My series will help you understand design patterns by building real projects. For this reason, you can see the places in which each pattern could be applied. I want to focus on learning by doing instead of talking too much about theories.

I'm Hiep. I work as a full-time software engineer. Most of my open-source projects are focused on one thing - to help people learn 📚.

> If The repository is useful, please help me share the post and give me a :star: It will make me feel the motivation to work even harder. I will try to make many open sources and share them with the community.

## **Table of Contents**

| No. | Topics                               |
| --- | ------------------------------------ |
| 1   | [Definition.](#definition)           |
| 2   | [Scenarios.](#scenarios)             |
| 3   | [Building Logger.](#building-logger) |
| 4   | [Result.](#result)                   |

<a id="definition"></a>

## 1. Definition.

Singleton pattern will be used to ensure a class has only one instance, and provide a global point of access to it.

<a id="scenarios"></a>

## 2. Scenarios.

We want to display something on the console, we often use the `console.log` statement.

However, the information should be displayed in different formats (table format or including date and time, etc). Hence, we should create a Logger class that includes different methods. To achieve that and we can use it in different places in our applications.

> Whenever we need to use Logger class, we have to create a new instance of Logger class by writing something like this:
>
> ```js
> const logger = new Logger();
> ```
>
> In this case, creating different logger instances is not neccessary. Therefore, we should find a way to create a single instance which could be reused instead of creating the new one.

<a id="building-logger"></a>

## 3. Building Logger.

Our Logger class will be looked like this:

```js
class Logger {
  private static logger: Logger;

  constructor() {
  }

  public static getInstance(): Logger {
    if (!this.logger) {
      this.logger = new Logger();
    }
    return this.logger;
  }

  public log(input: any): void {
    console.log(input);
  }

  public table(input: any): void {
    console.table(input);
  }
};
```

Firstly, we created the logger instance using the `static` keyword. We can access the static variables by using the class name.

We created the `getInstance` method. we will check if the instance was created, it would be returned instead of creating the new one.

If the instance was not created, we would create a new instance and assign it to the `logger` instance so that we can reuse that instance later.

<a id="result"></a>

## 4. Result.

Now we use the created Logger class and then try to log some data.

```js
const logger = Logger.getInstance();

logger.log("Single Pattern");
logger.table([{ id: 1, name: "Singleton", status: "Done" }]);
```

The result will look like this

```js
Single Pattern
┌─────────┬────┬─────────────┬────────┐
│ (index) │ id │    name     │ status │
├─────────┼────┼─────────────┼────────┤
│    0    │ 1  │ 'Singleton' │ 'Done' │
└─────────┴────┴─────────────┴────────┘
```

The above result describes the first logger instance and the second logger instance is the same.

On the other hand, our Logger class can display the information in different formats.

I hope that the post can help you understand about singleton pattern.

Thanks and Best Regards, \
Hiep Tuan Le
