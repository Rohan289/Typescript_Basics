const profile = {
  name: 'rohan',
  age: 24,
  coords: {
    lat: 20,
    long: 25,
  },
  setAge(age: number): void {
    this.age = age;
  },
};

const { age }: { age: number } = profile;
console.log('age', age);

const {
  coords: { lat, long },
}: { coords: { lat: number; long: number } } = profile;
console.log(lat);

const { coords }: { coords: { lat: number; long: number } } = profile;

console.log(coords);
