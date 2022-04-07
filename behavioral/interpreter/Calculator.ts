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