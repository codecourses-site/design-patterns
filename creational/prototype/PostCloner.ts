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

const post = new Post('Creational pattern - Prototype pattern', 'Understand the prototype pattern by building the post cloner class');
console.log(post.clone());