//The optional chaining ?. is a safe way to access nested object 
// properties, even if an intermediate property doesn’t exist.

const people = [
    {
      name: 'bob',
      location: { street: '123 main street', timezone: { offset: '+7:00' } },
    },
    {
        name: 'peter',
        location: { street: '123 Pine street' }
    },
    {
      name: 'susan',
      location: { street: '123 Apple street', timezone: { offset: '+9:00' } },
    },
  ]
  
  people.forEach((person)=>
  {
    console.log(person.name)
    // console.log(person.location.timezone.offset)
    //We get an error becuse we are trying to access a property of the undefined

    console.log(
        person.location && person.location.timezone && person.location.timezone.offset
    )
    //This will access the offset values from the given object

    console.log(person?.location?.timezone?.offset)

    console.log(person?.location?.timezone?.offset|| 'no value') 
  })