// Unique Values
const menu = [
    {
      name: 'pancakes',
      category: 'breakfast',
    },
    {
      name: 'burger',
      category: 'lunch',
    },
    {
      name: 'steak',
      category: 'dinner',
    },
    {
      name: 'bacon',
      category: 'breakfast',
    },
    {
      name: 'eggs',
      category: 'breakfast',
    },
    {
      name: 'pasta',
      category: 'dinner',
    },
  ];

const categories = menu.map((item)=> item.category);
console.log(categories)

// For Unique Values --> we use set method

// Here, it will convert this into an object
const categories2 = new Set(menu.map((item)=> item.category));
console.log(categories2)


// Here, we convert the object into the array back
const categories3 = [...new Set(menu.map((item)=> item.category))];
console.log(categories3)

const categories4 = ['Hello', ...new Set(menu.map((item)=> item.category))];
console.log(categories4)