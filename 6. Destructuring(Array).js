// What is destructuring ? 
// Faster/Easier way to access/unpack variables from arrays, objects

const fruits = ['Orange', 'Apple', 'Banana', 'Kiwi'];
const friends = ['John','Peter','Bob','Anna','Kelly'];

const fruit1 = fruits[0];
const fruit2 = fruits[1];
const fruit3 = fruits[2];
const fruit4 = fruits[3];

console.log(fruit1, fruit2, fruit3);

const [john,peter,bob,anna,kelly] = friends;
console.log(john,peter,bob,anna,kelly);

let first ='chhavi';
let second = 'raghav';

// let temp = second;
// second = first;
// first = temp;

[second, first] = [first,second];

console.log(first,second);

   