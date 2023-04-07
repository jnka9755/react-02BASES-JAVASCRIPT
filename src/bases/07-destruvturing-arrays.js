const characters = ['Goku', 'Vegeta', 'Trunks'];
const [ , , item3] = characters;
console.log( item3 );

const getArray = () => {
    return ['ABC', 123];
}

const [ item1, item2 ] = getArray();
console.log( item1, item2 );


const getArray2 = (value) =>{
    return [ value, () => { console.log ('Hola Mundo') }];
}

const array = getArray2 ('Goku');

const [name, greeting] = array;


console.log(name);
greeting();