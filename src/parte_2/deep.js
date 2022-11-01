//Creamos un objeto (primera referencia en memoria)
const obj1 = {
    a: "a",
    b: "b",
    c: { //Creamos otro objeto (segunda referencia en memoria)
        d: "d",
        e: "e"
    }
}

//Nos crea un string partiendo de un objeto.
const obj2string = JSON.stringify(obj1);
console.log(obj2string);

//De un string nos crea un objeto
const obj2Real = JSON.parse(obj2string)
console.log(obj2Real) //Objeto copiado.

////////////////////EDITAMOS EL OBJETO 1
//Esto es para ver si el cambio afecta al objeto 2
obj1.c.d = "Modificado :)";
console.log("Objeto original = ", obj1);
console.log("Objeto modificado = ", obj2Real);
