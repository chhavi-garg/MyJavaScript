// MAP Method -->

// returns a new array
// does not change the size of original array (unlike filter)
// uses values from original array when making new one
  
const people = [
    {
      name: 'bob',
      age: 20,
      position: 'developer',
    },
    {
      name: 'anna',
      age: 25,
      position: 'designer',
    },
    {
      name: 'susy',
      age: 30,
      position: 'the boss',
    },
    {
      name: 'john',
      age: 26,
      position: 'intern',
    },
  ];
  
 const ages = people.map(()=>{});
 console.log(ages);

 const ages2 = people.map((person)=>{
    console.log(person);
    return 'hello world'
 });
 console.log(ages2);

 const ages3 = people.map((person)=>{
    return person.age;
 });
 console.log(ages3);

 const ages4 = people.map((person)=> person.age * 2);
 console.log(ages4);

 const newPeople = people.map((item)=>
 { 
    return{
        firstName:item.name.toUpperCase(),
        oldAge:item.age + 20
    };
 });
console.log(newPeople);

const names = people.map((person)=>person.name);
console.log(names)