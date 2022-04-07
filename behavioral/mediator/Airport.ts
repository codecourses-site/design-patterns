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
    return this.airplanes.map(airplane => airplane.position);
  }
}

const boeing = new Airplane(311295, new TrafficTower());
console.log(boeing.requestPositions());