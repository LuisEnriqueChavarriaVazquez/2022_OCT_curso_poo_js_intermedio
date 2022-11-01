//Creamos un objeto (primera referencia en memoria)
const obj1 = {
    a: "a",
    b: "b",
    c: { //Creamos otro objeto (segunda referencia en memoria)
        d: "d",
        e: "e"
    },
    metodoEjemplo(){
        console.log("Ejemplo");
    }
}

//Función de deep copy.
function deepCopy(subject) {
    let copy;

    if (Array.isArray(subject)) {
        copy = [];
    } else if (typeof subject === "object") {
        copy = {};
    } else {
        return subject;
    }

    for (key in subject) {
        copy[key] = deepCopy(subject[key]);
    }

    return copy;
}

//Hacemos la copia del objeto 1.
//Esto ahora funciona para atributos y métodos sin problema.
const obj2 = deepCopy(obj1);
console.log(obj2);