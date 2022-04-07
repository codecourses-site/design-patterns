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