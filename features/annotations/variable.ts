const apples: number = 5;
let colors: string[] = ['1', '2', '3'];

let a: { x: number; y: number } = {
  x: 1,
  y: 1,
};

/* when to use type annotations

1. Function that returns any type

ex : JSON.parse() always returns any as it can't predict what will be the return type since it is based on the input string


2. When we declare a variable on one line and initialize it later

3. Variables whose type cannot be inferred correctly

*/

const json = '{"x" : 10, "y" : 20}';
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates);

let words = ['red', 'green', 'blue'];
let foundWords: boolean;
words.forEach((color) => {
  if (color === 'green') {
    foundWords = true;
  }
});

let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

numbers.forEach((element) => {
  if (element > 0) {
    numberAboveZero = element;
  }
});


/* 

Type inference on function works on return type of a function and not on the return type of an argument


*/