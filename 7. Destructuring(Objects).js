// Object destructuring

const bob = {
    first: 'bob',
    last: 'sanders',
    city: 'chicago',
    siblings: {
      sister: 'jane',
    },
  };

const firstName = bob.first;
const lastName = bob.last;
const sister = bob.siblings.sister;
console.log(firstName, lastName, sister)


const {first,last,city,zip} = bob;
console.log(first,last,city,zip)

// In arrays, the order matters but in the objects order doesnt matter


const bob2 = {
    first2: 'bob',
    last2: 'sanders',
    city2: 'chicago',
    siblings: {
      sister: 'jane',
    },
  };
const last2 = 'some value';
const {first2,last2: shakeAndBake,city2,zip2, siblings :{sister :favouriteSibing}} = bob2;
console.log(first2, last2,city2, zip2, shakeAndBake,favouriteSibing);

function printPerson({first, last,siblings :{sister}})
{
    // const{first,last} = person
    console.log(first,last,sister);
}

printPerson(bob);