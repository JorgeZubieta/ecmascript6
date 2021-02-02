//Trailing comma, se aplica al ultimo elemento, para evitar errores si a futuro quiero agregar mas elementos. Llamada coma final!
const data= {
    front:'Alej', // para el proximo elemento
    back: 'Rel',// esta coma se demonina coma final!
}


//Object entries devuelve los valores de una matriz.
const data ={
    // frontend:'Alej', backend: 'Rel', desing: 'Ana'
    frontend:'Alej',
    backend: 'Rel',
    desing: 'Ana',
};
//Tranformar este objeto en una matriz.
const entries = Object.entries(data);
console.log(entries);
//Si queremos saber cuantos elementos posee nuestro arreglo ahora es posible con length
console.log(entries.length);
// run code:
// [ [ 'frontend', 'Alej' ], [ 'backend', 'Rel' ], [ 'desing', 'Ana' ] ]
// 3


//Objetc Values: trasforma los elementos de un strign generando un arreglo. 
const data= {
    frontend:'Alej',
    backend: 'Rel',
    desing: 'Ana',
}
//Tranformar este objeto en una matriz. sin los campo: frontend, backnend, design
const values = Object.values(data);
console.log(values);
// puedo agregar length para saber la cantidad de elementos
console.log(values.length);
// run code:
// [ 'Alej', 'Rel', 'Ana' ]
// 3


// PADDING
// nos permite añadir cadenas vacías a string, pudiendo modificar la cadena string como tal.
//Podría servir del lado del front , para mostrar una estructura de elementos.
const string ='hello';
// hello = 5 caracteres, hi son 2 caracteres total 7
console.log(string.padStart(7,'hi')) // se añade al inicio la palabra 'hi' al total de 7
console.log(string.padEnd(12,'hi')) // Se añade al final la palabra 'hi' y como falta se autorellena hasta llega a 12 caracteres.



// Async Await
const helloWorld = () => {
    return new Promise((resolve, reject) => {
    (true)
    ? setTimeout(() => resolve('Hello World'), 6000 )
    : reject ( new Error('Test Error'))
	})
};
const helloAsync = async () => {
    // estas sentencias se ejecutan al inicio 
    console.log('esperamos los 6000 milisegundos');
    console.log('1'); 
    console.log('2'); 
    // se ejecuta el Await!
    const hello = await helloWorld();
    // estas sentencias se ejecutan despues de los 6000
    console.log('3'); 
    console.log('4'); 
    // se imprime el hello
    console.log(hello);
    // se ejecutan las siguientes sentencias
    console.log('5'); 
    console.log('6'); 
};
helloAsync();

// trabajar el Async y Await de forma correcta
// Con esta forma podemos amnejar errores correctamente!
const helloWorld = () => {
    return new Promise((resolve, reject) => {
    (true)
    ? setTimeout(() => resolve('Hello World'), 6000 )

    : reject ( new Error('Test Error'))
    // No se esperan los 6 segundos
})
};
const anotherFunction = async () => {
	try{
        const hello = await helloWorld();
		console.log(hello);
	} catch (error) {
		console.log(error); 
	}
}
anotherFunction();




// ejemplo ejercicio simulando una venta de helados con Async Await
const prepareIceCream = (money) => {
    return new Promise((resolve, reject) => {
        if(money >= 500) {    
            console.log('We are preparing your Ice cream...')
            setTimeout(() => {
                resolve('Here you are a Chocolate Ice cream');
            }, 6000);  //3. Si el dinero que ingresaste es mayor o igual a 500, entonces te preparamos el helado. El proceso toma 6 segundos.
        } else {
            reject('Sorry! You do not have enough money :('); //3. Si el dinero es menor a 500, lo sentimos, no te alcanza
        }
    });
}

const buyIceCream = async (money) => { 
    try{
        console.log('Welcome to Ice Cream World!');
        const result = await prepareIceCream(money); //2. Esperas aquí mientras envíamos el dinero, lo verifican y te preparan el helado 
        console.log(result); //4. Imprimimos tu pedido! si todo salió bien.
        console.log('Thanks for your purchase!');
    } catch(e) {
        console.log(e); //4. Te decimos que no salió bien el proceso porque tu dinero no es suficiente.
    }
}

buyIceCream(500); //1. llamas a la funcion comprar helado e Ingresas el dinero
