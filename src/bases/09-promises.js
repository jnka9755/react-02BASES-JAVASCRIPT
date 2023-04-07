import { getHeroeById, getHeroeByOwner } from "./bases/08-import-export-funtionsArrays";


// const promise = new Promise( (resolve, reject) => {
//     setTimeout(() => {

//         const heroe = getHeroeById(2);
//         resolve(heroe);
//         // reject( 'No se pudo encontrar el héroe' );
//     }, 2000);
// });

// promise.then((heroe) =>{
//     console.log('heroe', heroe);
// }).catch(
//     error => console.warn(error)
// );


const getHeroeByIdAsync = ( id ) => {
    
    return new Promise( (resolve, reject) => {
        setTimeout(() => {

            const heroe = getHeroeById( id );
            if(heroe)
                resolve(heroe);
            else
                reject( 'No se pudo encontrar el héroe' );

        }, 2000);
    });
}

getHeroeByIdAsync(2)
    .then ( heroe => console.log ( 'Heroe: ', heroe ))
    .catch( error => console.error( error ));