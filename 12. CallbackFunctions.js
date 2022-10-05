// Callback function is a function that we pass in as an argument
// and execute it later


function makeUppercase(value) {
    console.log(value.toUpperCase())
}
// makeUppercase('peter')

function handleName(name,cb)  //cb-->callback function
{
    const fullName = `${name} smith`
    console.log(fullName)
    cb(fullName)
}
handleName('peter',makeUppercase);

function reverseString(value){
    console.log(value.split('').reverse().join(''))
}
handleName('peter',reverseString);

handleName('susan',(value)=>console.log(value)); //susan smith

// array methods, setTimeout, event listeners etc