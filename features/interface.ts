interface Vehicle {
  name: string;
  year: Date;
  broken: boolean;
  getSummary(): string;
}
const oldCivic: Vehicle = {
  name: 'Desire',
  year: new Date(),
  broken: false,
  getSummary() {
    return `The summmary is ${this.name}`;
  },
};

function getDetailsForVehicle(car: Vehicle) {
  console.log(`name  : ${car.name}`);
  console.log(`summary : ${car.getSummary()}`);
}

getDetailsForVehicle(oldCivic);
