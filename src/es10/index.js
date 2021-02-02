// FLAT : elegimos la profindidad con la que queremos trabajar
let array = [1,2,3, [1,2,3, [1,2,3]]];
console.log(array.flat(1));

// FALT MAP : ej multipicacion
// va a mapear nuestra matriz y realizara una operacion a cada elemento 
let array = [1,2,3,4,5];
console.log(array.flatMap(value => [value, value - 2 ]));


// TRIMSTAR : elimina los espacios del inicio de un string!
let hello = '          Hello World';
console.log(hello);
console.log(hello.trimStart());
// TRIMEND : elimina los espacios del final de un string!
let hello = 'Hello World        ';
console.log(hello);
console.log(hello.trimEnd());
//TRIM : (no se si es de es10) elimina los espacios del inicio y del final
let hello = "    Hello world    "
console.log(hello.trim());


// FROM ENTIRES : transfroma clave valor en objeto.
let entries = [["name","oscar"],["age",32]];
console.log(Object.fromEntries(entries));

// Objeto tipo simbolo que nos permite acceder a una descripcion.
let Sy = 'My Symbol is so nice!';
let symbol = Symbol(Sy);
console.log(symbol.description);