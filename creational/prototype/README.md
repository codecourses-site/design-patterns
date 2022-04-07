# Creational Pattern - Prototype Pattern.

<img src="../../screenshots/screenshot.jpeg" alt="design-patterns"/>

> Click :star: if you like the project. Pull Request are highly appreciated

This is the fourth part of my series (23 GoF Design Patterns). My series will help you understand design patterns by building real projects. For this reason, you can see the places in which each pattern could be applied. I want to focus on learning by doing instead of talking too much about theories.

I'm Hiep. I work as a full-time software engineer. Most of my open-source projects are focused on one thing - to help people learn 📚.

> If the repository is useful, please help me share the post and give me a :star: It will make me feel the motivation to work even harder. I will try to make many open sources and share them with the community.

## **Table of Contents**

| No. | Topics                                         |
| --- | ---------------------------------------------- |
| 1   | [Definition.](#definition)                     |
| 2   | [Scenarios.](#scenarios)                       |
| 3   | [Building Post Cloner.](#building-post-cloner) |
| 4   | [Result.](#result)                             |

<a id="definition"></a>

## 1. Definition.

A prototype pattern will help you to create an object from an existing object.

> To clone an object in Javascript, we have several ways such as Object.assign(), spread operator, libraries, and so on.
>
> However, we should build by ourselves to understand the core concepts. Therefore, we will feel more interested in programming and increase logical thinking.

<a id="scenarios"></a>

## 2. Scenarios.

We can imagine that dev.to provides a feature that allows the authors to clone their existing posts.

As mentioned before, several ways help us to clone an object in Javascript. However, we will create the solution by ourselves by using the Prototype pattern.

<a id="building-post-cloner"></a>

## 3. Building Post Cloner.

Our Post class will be looked like this:

```js
class Post {
  title: string;
  content: string;

  constructor(title: string, content: string) {
    this.title = title;
    this.content = content;
  }

  clone() {
    return new Post(this.title, this.content);
  }
}

const post = new Post(
  "Creational pattern - Prototype pattern",
  "Understand the prototype pattern by building the post cloner class"
);

console.log(post.clone());
```

In the constructor, we accept **title** and **content** as parameters. It means that when the author wants to create a new post, the author needs to input the title and content for the post.

The most important part is about the **clone** method. The method will help us to create a new object from an existing object. **this** keyword is used to refer to the properties of the current instance (the existing object).

<a id="result"></a>

## 4. Result.

```js
Post {
  title: 'Creational pattern - Prototype pattern',
  content: 'Understand the prototype pattern by building the post cloner class'
}
```

The above result describes that the content of the first post and the content of the second post are the same after running the code. We implemented the idea by using a Prototype pattern.

By using design patterns, we can understand the core concepts and make our code more readable and cleaner. I hope that the post can help you understand about Prototype pattern.

Thanks and Best Regards,
Hiep Tuan Le
