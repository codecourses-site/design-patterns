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

undo.addMemento(store.store('Step 1'));
undo.addMemento(store.store('Step 2'));
undo.addMemento(store.store('Step 3'));
const step2 = store.restore(undo.getMemento(1));
console.log(step2);

