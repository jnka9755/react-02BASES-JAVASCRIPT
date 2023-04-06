const person = {
    name: 'Juan',
    lastName: 'Santana',
    age: 26,
    address: {
        city: 'Mosquera',
        zip: 1234,
        lat: 12.12312,
        long: 43.1231
    }
};


const person2 = {...person};
person2.name = 'David';
person2.age = 29;

// console.table({ person });
console.log({ person });
console.log({ person2 });