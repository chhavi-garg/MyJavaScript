// What is Rest Operator(...) ?

// 1. gathers/collects items
// 2. destructuring, functions
// 3. placement important, careful with the same name
// 4. rest when declare function, spread when invoke the function

// With Arrays
const fruits = ['apple', 'orange', 'lemon', 'banana', 'pear'];
const[first] = fruits;
console.log(first);

const[first2, second2] = fruits;
console.log(first2, second2)

const[first3,... rest] = fruits;
console.log(first3,rest)


console.log(rest)
const specificFruit = rest.find((fruit)=> fruit==='lemon');
console.log(specificFruit);

// With Objects
const person = { name: 'john', lastName: 'smith', job: 'developer' };
const { job, ...rest2 } = person;
console.log(job, rest2);

// With Functions

const getAverage = (name, ...scores) => {
    console.log(name);
    console.log(scores);
    const average =
      scores.reduce((total, item) => {
        return (total += item);
      }, 0) / scores.length;
    console.log(average);
  };

//   getAverage(person.name, 89,60,30,110,43);
  const testScores = [67, 78, 99, 100];
  getAverage(person.name,...testScores);



