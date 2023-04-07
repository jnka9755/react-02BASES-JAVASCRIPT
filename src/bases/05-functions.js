const greet = function ( name ) {
    return `Hola, ${ name }`;
}

const greet2 = ( name ) => {
    return `Hola, ${ name }`;
}

const greet3 = ( name ) =>  `Hola, ${ name }`;

const greet4 = () =>  `Hola mundo`;

console.log(greet( 'Juan' ));
console.log(greet2( 'Juan' ));
console.log(greet3( 'Juan' ));
console.log(greet4());

/////////////////////////////////////////////////

const getUser = () => ({
    uid:'ABC123',
    userName: 'JnKa9755'
});

const user = getUser();
console.log( user );

/////////////////////////////////////////////////

function getActiveUser ( name ) {
    return {
        uid: 'ABC123',
        userName: name
    }
}

const getActiveUser2 = ( name ) => {
    return {
        uid: 'ABC123',
        userName: name
    }
}

const getActiveUser3 = ( name ) => ({
    uid: 'ABC123',
    userName: name
});

const activeUser = getActiveUser( 'Juan' );
const activeUser2 = getActiveUser2( 'Juan' );
const activeUser3 = getActiveUser3( 'Juan' );

console.log( activeUser );
console.log( activeUser2 );
console.log( activeUser3 );