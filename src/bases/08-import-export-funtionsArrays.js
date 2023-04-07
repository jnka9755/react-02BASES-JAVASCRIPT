import heroes, { owners }  from '../data/heroes';

export const getHeroeById = (id) => heroes.find(x => x.id === id);

// const heroe = getHeroeById(2);
// console.log(heroe); 

export const getHeroeByOwner = (owner) => heroes.filter(x => x.owner === owner);

// const heroesList = getHeroeByOwner('DC');
// console.log(heroesList);