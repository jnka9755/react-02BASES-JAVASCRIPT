const person = {
    name: 'Juan',
    lastName: 'Santana',
    age: 26
};

const { name, age , lastName } = person;


console.log( age, name, lastName );

// console.log( person.lastName );
// console.log( person.age );


const getPerson = ({ name, lastName, age, weight = 60 }) => {

    // console.log( name, age, weight);
    return{
        fullName: `${name} ${lastName}`,
        years: age,
        location: {
            lat: 12.12312,
            lng: -12.12312
        }
    }

}

const { fullName, years, location:{ lat, lng } } = getPerson( person );
console.log( fullName, years );
console.log( `Localización: ${lat} ${lng}` );
