//Creamos un objeto (primera referencia en memoria)
const obj1 = {
    a: "a",
    b: "b",
    c: { //Creamos otro objeto (segunda referencia en memoria)
        d: "d",
        e: "e"
    }
}

const obj2 = {}; //Creamos un objeto vacio

//Copiamos una por una las propiedades de obj1 a obj2
/*
*   Esto se hace asi para que no solamente se copie la
*   referencia en memoria, sino que se copie todo el contenido
*   del objeto de manera independiente.
*   
*   Con esto, lo que se consigue es que al modificar objt1
*   no afecte al contenido de obj2.
*   
*   Nota: El atributo c es un objeto, por lo que solo se
*   copio su referencia en memoria en el objeto 2.
*   
*   Lo anterior significa que si modifico el objeto guardado en C,
*   también se modificará el objeto de c, en el obj2. 
*/
for(prop in obj1){
    obj2[prop] = obj1[prop];
}

console.log("Objeto 1 = ", obj1);
console.log("Objeto 2 = ", obj2);

//Modificamos el objeto de c
obj1.c.d = "Modificacion";

console.log("Objeto 1 = ", obj1);
console.log("Objeto 2 = ", obj2);
