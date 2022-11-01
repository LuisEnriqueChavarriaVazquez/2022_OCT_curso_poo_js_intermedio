//Creamos nuestro objeto
const luis = {
    name: "Juanito",
    age: 18,
    aprovedCourses: [],
    
    addCourse(nameCourse){
        this.aprovedCourses.push(nameCourse);
    }
}

//Imprimos los nombres de los atributos
//console.log(Object.keys(luis));
//console.log(Object.getOwnPropertyNames(luis));

//Imprimimos los valor y llave de cada atributo
//console.log(Object.entries(luis));


/*Antes para crear nuevos atributos en los objetos debiamos
hacer lo siguiente*/
//luis.nuevaPropiedad = "nuevoValor";

//Esto anterior no permite modoficiar las propiedades oculatas de
//los objetos...

//Entonces hay que hacer esto...
Object.defineProperty(luis, 'pruebaUno', {
    value: 'Valor en texto, prueba 1',
    enumerable: false,
    writable: true,
    configurable: true
});

Object.defineProperty(luis, 'pruebaDos', {
    value: 'Valor en texto, prueba 2',
    enumerable: true,
    writable: false,
    configurable: true
});

Object.defineProperty(luis, 'pruebaTres', {
    value: 'Valor en texto, prueba 3',
    enumerable: true,
    writable: true,
    configurable: false
});

console.log(luis);
//Nos muestra más propiedades ocultas de cada atributo.
console.log(Object.getOwnPropertyDescriptors(luis));