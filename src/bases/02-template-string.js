const name = 'Juan';
const lastName  = 'Santana';

// const fullName = name + ' ' + lastName;
const fullName = `${name} ${lastName}`;  //Template String

console.log( fullName )


function getGreeting (name){
    return 'Hola ' + name ;
}

console.log(`Este es un saludo: ${ getGreeting(name) }`);