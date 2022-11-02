//Simulamos el encapsulamiento a medias

//Paso 1.
/*
*   Tenemos nuestra función para los
*   parámetros requeridos.
*/
function requiredParam(param) {
    throw new Error(param + " es obligatorio");
}

//Paso 2
/*
*   Tenemos nuestra mini fábrica de objetos
*/
function createStudent({
    name = requiredParam("name"), //Es un valor obligatorio
    mail = requiredParam("mail"), //Es un valor obligatorio
    edad,
    twitter,
    facebook,
    instagram,
    approvedCourses = [],
    learningPaths = []
} = {}) {
    //Creamos 2 OBJETOS
    //////////////////////////////
    //Son aquellos atributos privados. 
    const private = {
        "_name": name
    };
    //Son aquellos atributos públicos.
    const public = {
        mail,
        edad,
        socialmedia:{
            twitter,
            facebook,
            instagram
        },
        approvedCourses,
        learningPaths,
        ///////////////////////////////
        /*En próximas clases se usará get y set*/
        //Método para cambiar el nombre.
        changeName(newName){
            private._name = newName;
        },
        //Método para leer el nombre.
        readName(){
            return private._name;
        }
        ///////////////////////////////
    };

    //Con esto protegemos de editar nuestros métodos.
    //Asi evitamos que nos ataquen, porque no pueden meternos código en los métodos.
    Object.defineProperty(public, "readName",{
        configurable: false, //No se puede borrar el método
        writable: false //No se puede editar el método.
    });

    Object.defineProperty(public, "changeName",{
        configurable: false,
        writable: false
    });

    //Esto es lo que podemos ver. (Solo retornamos lo que es público)
    return public
}

//Creamos nuestro objeto literal.
//Con los valores obligatorios y los demas valores
//son undefined.
const luis = createStudent({
    name: "Luis",
    mail: "luisechvz@gmail.com"
});

//Leemos el nombre
let nombreUsuario = luis.readName();
console.log('readName = ', nombreUsuario);
//Cambiamos y leemos el nombre.
luis.changeName("Enrique");
let nuevoNombre = luis.readName();
console.log('readName nuevo = ',nuevoNombre);