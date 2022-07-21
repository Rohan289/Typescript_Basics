class ArrayOfNumbers {
  constructor(public collection: number[]) {}

  get(index: number): number {
    return this.collection[index];
  }
}

class ArrayOfStrings {
  constructor(public collection: string[]) {}

  get(index: number): string {
    return this.collection[index];
  }
}

//TO USE GENERICS

class ArrayOfGeneric<T> {
  constructor(public collection: T[]) {}

  get(index: number): T {
    return this.collection[index];
  }
}

//generic with function

function printStrings(arr: string[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(i);
  }
}

function printGenerics<T>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(i);
  }
}

//Generic constraints

class House {
  print(): void {
    console.log('This is house!');
  }
}

class Cars {
  print(): void {
    console.log('This is a car');
  }
}

interface Printable {
  print(): void;
}

function printHouseOrCars<T extends Printable>(arr: T[]) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i].print());
  }
}

let car = new Cars();

let aar: Cars[] = [];
aar.push(car);

printHouseOrCars<Cars>(aar);
