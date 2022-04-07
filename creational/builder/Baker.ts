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