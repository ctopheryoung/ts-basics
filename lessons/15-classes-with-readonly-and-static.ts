class Dog {
  constructor(public readonly name: string, public readonly age: number) {}
}

const cooper = new Dog("Cooper", 9);
// cooper.name = "Coopie";
console.log(cooper.name);

class DogList {
  private dogs: Dog[] = [];

  static instance: DogList = new DogList();

  private constructor() {}

  static addDog(dog: Dog) {
    DogList.instance.dogs.push(dog);
  }

  getDogs() {
    return this.dogs;
  }
}

DogList.addDog(cooper);
console.log(DogList.instance.getDogs());

// const dl = new DogList();
