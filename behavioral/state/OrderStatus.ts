interface IOrderStatus { 
  name: string;
  nextStatus?: IOrderStatus;

  next(): IOrderStatus | undefined;
}

interface IOrder { 
  state: IOrderStatus | undefined;
}

class OrderStatus implements IOrderStatus { 
  name: string;
  nextStatus?: IOrderStatus;

  constructor(name: string, nextStatus?: IOrderStatus) { 
    this.name = name;
    this.nextStatus = nextStatus;
  }

  next(): IOrderStatus | undefined { 
    return this.nextStatus;
  }
}

class WaitingForPayment extends OrderStatus implements IOrderStatus { 
  constructor() { 
    super('waitingForPayment', new Shipping());
  }
}

class Shipping extends OrderStatus implements IOrderStatus { 
  constructor() { 
    super('shipping', new Delivered());
  }
}

class Delivered extends OrderStatus implements IOrderStatus { 
  constructor() { 
    super('delivered');
  }
}

class Order implements IOrder { 
  state: IOrderStatus | undefined;

  constructor(state: IOrderStatus) { 
    this.state = state;
  }

  next() { 
    this.state = this.state ? this.state.next() : this.state;
    return this.state;
  }
}

const order = new Order(new WaitingForPayment());
console.log(order.next());
console.log(order.next());
console.log(order.next());

