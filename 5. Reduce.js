// Reduce --> iterates, callback function --> reduces to a single value - number, array, object

// 1st parameter ('acc') - total of all calculations
// 2nd parameter ('curr') - current iteration/value

const staff = [
    { name: 'bob', age: 20, position: 'developer', salary: 100 },
    { name: 'peter', age: 25, position: 'designer', salary: 300 },
    { name: 'susy', age: 30, position: 'the boss', salary: 400 },
    { name: 'anna', age: 35, position: 'intern', salary: 10 },
  ];

const dailyTotal = staff.reduce((total,person)=>
{
    console.log(total);
    console.log(person.salary);

    total +=person.salary;
    return total;  // always return the 1st parameter
},0) // 0 --> initial total value
console.log(dailyTotal);

const dailyTotal1 = staff.reduce((total, person) => {
    console.log(`Total ${total}`);
    console.log(`Current ${person.salary}`);
    total += person.salary;
    return total;
  }, 0);
console.log(dailyTotal1);


// Reduce in Objects -->

// cart example
const cart = [
    {
      title: 'Samsung Galaxy S7',
      price: 599.99,
      amount: 1,
    },
    {
      title: 'Google Pixel',
      price: 499.99,
      amount: 2,
    },
    {
      title: 'Xiaomi Redmi Note 2',
      price: 699.99,
      amount: 4,
    },
    {
      title: 'Xiaomi Redmi Note 5',
      price: 399.99,
      amount: 3,
    },
  ]

  let total = cart.reduce((total,cartItem)=>{
    console.log(cart);
    return total;
  },{}); //here, we have passed {} so as to return an object
  console.log(total);
  //It is returning an empty object


  let total1 = cart.reduce((total,cartItem)=>{
    return total;
  },{
    totalItems: 0,
    cartTotal:0,
  })
  console.log(total1);
  //It is returning an object with 2 specific properties

  let total2 = cart.reduce((total,cartItem)=>{
    const {amount,price}= cartItem;
    // count items
    total.totalItems +=amount;

    //count sum
    total.cartTotal +=amount*price;
    return total;
  },{
    totalItems : 0,
    cartTotal : 0,
  });
  console.log(total2);

  let {totalItems, cartTotal} = cart.reduce((total,cartItem)=>{
    const {amount,price}= cartItem;
    // count items
    total.totalItems +=amount;
    //count sum
    total.cartTotal +=amount*price;
    return total;
  },{
    totalItems : 0,
    cartTotal : 0,
  });
  cartTotal = parseFloat(cartTotal.toFixed(2));
  console.log(totalItems, cartTotal);
