// Array.from --> NOT ON PROTOTYPE

// from - returns Array Object from an object
// with a length property or an iterable object
// from - turns array-like/ish into array - string, nodeList, Set

const udemy = 'udemy'
console.log(Array.from(udemy))

const text = 'hello world im learning something very interesting';

const newText = Array.from(text).find((item)=>item==='world')
console.log(newText)
const item = Array.from({length:120},(_,index)=>{

})