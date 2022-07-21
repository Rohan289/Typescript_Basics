const add = (a: number, b: number): number => {
  return a + b;
};

let user = {
  firstName: 'Rohan',
  surname: 'Bhowmick',
};

const printName = ({
  firstName,
  surname,
}: {
  firstName: string;
  surname: string;
}) => {
  console.log(firstName);
  console.log(surname);
};

printName(user);
