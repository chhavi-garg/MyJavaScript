// Dot Notation
const person1 = {
    name : 'john',
};
console.log(person1.name);
person1.age = 25;
console.log(person1);


// Square Brackets Notation

const items ={
    'featured-items' : ['item1', 'item2'],
};
console.log(items["featured-items"]);
// Here, the dot notation will not work
// instead we have to use the square bracket notation


console.log(person1['name']);

let appState ='loading';
// appState ='error';
const keyName = 'computer';
const app = {
    [appState]: true
}
app[keyName] ='apple';
console.log(app);
// Hence, the value of the variable will be the key


//How to update values of the keys
const state =
{
    loading: true,
    name :'',
    job: '',
}

function updateState(key, value)
{
    state[key] = value
}

updateState('name', 'john');
console.log(state);
updateState('job', 'developer');
console.log(state);

updateState('products', []);
console.log(state);

//So this is how we can dynamically change object keys and values using square bracket notation