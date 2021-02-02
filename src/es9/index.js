//OPERADOR DE REPOSO (filtro)
//Puede extraer todas las propiedades de un objeto que aun no se ha construido.

// ejemplo1
const obj = {
	name: 'Kaito',
	age: 2,
	country: 'jp',
}
let { name, ...all } = obj;
console.log(name, all);

// ejemplo2
const obj = {
	name: 'Kaito',
	age: 2,
	country: 'jp',
}
let { age, ...all } = obj;
console.log(all);

// OPERADOR DE PROPAGACION
// Vamos a poder unir 1 o 2 o 3 o cuantos elementos queramos de un objeto a otro objeto!
const obj1 = {
	name: 'Oscar',
	age: 32,
}

const obj2 = {
    ...obj1,
    country: 'mx',
    phone: 930924,
}
console.log(obj2);


// Promise.FINALY
// Podemos ver cuando ha terminado el llamado y poder ejecutar alguna funcion, o logica de Código segun el caso.
// Ejemplo1
const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)

        ? resolve('Hello World!')
        
        // ? setTimeout(() => { resolve('Hello World!');}, 3000)
        : reject(new Error('Test Error'));
    });
};
helloWorld()
    // then es la respuesta del llamado
    .then(response => console.log(response))
    // cath es cuando el llamdo no se cumple falso
    .catch(error => console.log(error))
    // finally es el bloque que codigo que s eejecuta cuando la funcion finaliza
    .finally(() => console.log('finalizó!'));


// Ejemplo2 (con setTimeout)
const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
        ? setTimeout(() => { resolve('Hello World!');}, 3000)
        : reject(new Error('Test Error'));
    });
};
helloWorld()
    // then es la respuesta del llamado
    .then(response => console.log(response))
    // cath es cuando el llamdo no se cumple falso
    .catch(error => console.log(error))
    // finally es el bloque que codigo que s eejecuta cuando la funcion finaliza
    .finally(() => console.log('finalizó!'));


// RegexData

// Ejemplo1
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
// Match nos permite saber si estan los datos correctamnte establecidos sobre este regex!
const match = regexData.exec('2021-02-02');
// se emparejan los grupos
const year = match[1]; 
const month = match[2];
const day = match[3]; 
console.log(year, month, day);
console.log('Date ->', year, month, day);

// Ejemplo2
const regexData = /(?<year>[0-9]{4})-(?<month>[0-9]{2})-(?<day>[0-9]{2})/
const match = regexData.exec('2018-04-20');
const { year, month, day } = match.groups;
console.log('Date ->', year, month, day);