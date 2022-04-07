interface IProfile { 
  name: string;
  gender: string;
}

interface Iiterator { 
  index: number;
  data: any[];
  next(): any;
  hasNext(): boolean;
}

class Profile implements IProfile { 
  name: string;
  gender: string;

  constructor(name: string, gender: string) { 
    this.name = name;
    this.gender = gender;
  }
}

class ProfileIterator implements Iiterator {
  index: number;
  data: any[];

  constructor(data: any[]) {
    this.index = 0;
    this.data = data;
  } 

  next() {
    return this.data[this.index++];
  }

  hasNext(): boolean {
    return this.index < this.data.length;
  } 
}

const profiles: Profile[] = [
  new Profile('Anna', 'Female'),
  new Profile('Camila', 'Female'),
  new Profile('Lucy', 'Female'),
  new Profile('Evelyn', 'Female'),
  new Profile('Jane', 'Female')
];

const profileIterator = new ProfileIterator(profiles); 

while (profileIterator.hasNext()) { 
  console.log(profileIterator.next());
}
