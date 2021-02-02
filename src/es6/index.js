// 1 - PARAMETROS POR DEFECTO
function newFunction(name, age, country)
{
    var name = name || 'Kaito';
    var age = age || 2;
    var country = country || 'Japan';
console.log(name, age, country);
}
// llamo a la funcion menu contexual y selecciono run code!
newFunction(); 
// me muestra los valores por defecto que puse!
// - - - - - - - - - - - - - - - - - con ecmascript6 - - - - - - - - - - - 
function newFunction2 (name = 'Oscar', age = 32, country = "Mx"){
    console.log(name, age, country);
}
// llamo a la funcion menu contexual y selecciono run code!
newFunction2();
// me muestra los valores por defecto que puse!
newFunction2('Yuki', '37', 'Japan');
// me muestra los valores que escribi dentro del parentesis


// 2 - TEMPLATE LITERALS (concatenacion)
// forma version anterior
let hello = "Hello";
let world = "World";
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);

// - - - - - - - - - - - - - - - - - con ecmascript6 - - - - - - - - - - - 
//  forma version es6
// aca utilizaremos las comillas francesas utilizando los template de es6
let hello = "Hola";
let world = "Mundo";
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

// destructuracion de elemenots
let person = {
    'name': 'Oscar',
    'age': 32,
    'country': 'Mx'
}

console.log(person.name, person.age);
//es6
let { name , age } = person;
console.log( name , age );

// Valor de programacion, unir elementos de diferentes arrays
let team1 = ['oscar', 'Julian', 'Ricardo'];
let team2 = ['valeria','jesica','camila'];
let teamEducation = ['david',...team1, ...team2];

console.log(teamEducation);


// 　Funcionamiento de Var y Let
{
    var globalVar = "global var";
}
{
    let globalLet = 'global let';
    console.log(globaLet);
}
console.log(globalVar);

// Constante CONST　no cambia su valor


// PARAMETROS EN OBJETOS
// Antes con es5
let name = 'oscar';
let age = 32;
obj = {name: name, age: age};

// con es6
obj2 = {name, age};
console.log(obj2);



// ARROW FUNCTIONS
// otra caracteristica de es6 - arrow functions
const names = [
{name: 'oscar', age: 32},
{name: 'jesica', age: 27}
]
// si quisiera iterar por cada uno de los elementos para 
// mostrarlos por consola utilizo el metodo map
// las arrow funcions son funciones anonimas! ya que en en el siguiente ejemplo
// function(item) es la funcion anonima!

// ante con es5
let listOfNames = names.map(function(item) {
    console.log(item.name);
}

// como lo hacemos ahora con las arrow functions con Es6!!!!!
// con esta saignacion => establecemos que es una funciona anonima y que nos va a regresar algo
let listOfNames2 = names.map(item => console.log(item.name));

// otra forma con una Constante
const listOfNames3 = (name, age, country) => {
    // iria el codigo de bloque que necesito para listOfNames3
}

// Otra forma en el caso que solo tengamos un solo elemento
const listOfNames4 = name => {
    // iria el codigo de bloque que necesito para listOfNames3
}

// La utlima puedo utilizar una nueva fucncion Square!
// no necesito poner un return, no bloques de llaves
const square = num => num * num;

// PROMESAS: con las cuales trabajsmos el asincronismo,
// pues jvs es asincronismo pues solo ejecuta una elemento a la vez
// para situaciones por ejemplo donde se va a llamar una API
// una promesa nos dice que algo va a pasar (verdadero o falso)

const helloPromise = () => {
    return new Promise((resolve,reject) => {
        //podemos poner false segun el caso
        if (true){
                resolve('Hey!');
        }
        else {
                reject('Ups!!');
            }
    });
}
// como ejecutamos la promesa?
// valor then nos ayuda a obtener la respuesta
// then: nos permite obtener esa respuesta
// nos permite obtener el valor de error y mostrarlo por consola
helloPromise()
    .then(response => console.log(response))
// en una promesa podemos anidar varios elementos then en el caso que necesitemos
// hacer algo por ejemplo en este caso poner hola!
    .then(() => console.log('hola'));
// catch: en caso de que no se cumpla esa promesa o fuera rechazada, 
    .catch(error => console.log(error));


// CLASE 5

// CLASES
class calculator {
	constructor() {
        // --> scope global
		this.valueA = 0;   
		this.valueB = 0;
	}
	sum(valueA, valueB) {
        // --> igualamos al valor que estamos recibiendo!
        this.valueA = valueA;
		this.valueB = valueB;
		return this.valueA + this.valueB;
	}
}
const calc = new calculator();
console.log(calc.sum(2,1));


// MODULOS import & export
// -->busco la carpeta donde esta el archivo modulo.js
import { hello } from './module';
console.log(hello())


// GENERATION
function* helloWorld() {
	if (true){
		yield 'hello, ';
	}
	if (true){
		yield 'world ';
	} 
};
const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(genetatorHello.next().value);
console.log(genetatorHello.next().value);