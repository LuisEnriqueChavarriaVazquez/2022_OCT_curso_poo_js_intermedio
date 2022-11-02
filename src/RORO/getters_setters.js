function requiredParam(param) {
    throw new Error(param + " es obligatorio");
}

//Hacemos nuestra fábrica de learning paths.
function createLearningPath({
    name = requiredParam("name"),
    courses = []
} = {}) {
    const private = {
        "_name": name,
        "_courses": courses
    };

    const public = {
        get name() {
            return private._name;
        },
        set name(newName) {
            if (newName.length != 0) {
                private._name = newName;
            } else {
                console.warn("Tu nombre debe ser de al menos un caracter");
            }
        },
        get courses() {
            return private._courses;
        }
    };

    return public;
}

//Hacemos nuestra fábrica de estudiantes.
function createStudent({
    name = requiredParam("name"),
    email = requiredParam("email"),
    age,
    twitter,
    instagram,
    facebook,
    approvedCourses = [],
    learningPaths = [],
} = {}) {
    const private = {
        "_name": name,
        "_learningPaths": learningPaths
    };

    const public = {
        email,
        age,
        approvedCourses,
        socialMedia: {
            twitter,
            instagram,
            facebook,
        },
        get name() {
            return private._name;
        },
        set name(newName) {
            //Validamos que el nombre tenga algo escrito
            if (newName.length != 0) {
                private._name = newName;
            } else {
                console.warn("Tu nombre debe tener al menos 1 caracter");
            }
        },
        /////Debemos hacer setter y getter para las learning paths.
        get learningPaths(){
            return private._learningPaths;
        },
        set learningPaths(newLearningPath){
            //Validamos que no falten datos
            if(!newLearningPath.name || !newLearningPath.courses){
                console.warn("Falta escribir el nombre o el curso de la learningpath");
                return;
            }else{
                private._learningPaths.push(newLearningPath);
            }
        }
    };

    return public;
}


const luis = createStudent({
    email: "luismail",
    name: "luis"
});

console.log(luis);

//Usamos el get
let nuevoNombre = luis.name; //Uso de get
console.log("Nuevo nombre = ", nuevoNombre);

//Usamos el set y luego el get
luis.name = "Enrique"; //Uso de set
nuevoNombre = luis.name; //Uso de get
console.log("Nuevo nombre modificado = ", nuevoNombre);

//Usamos el set y luego el get
luis.name = ""; //Uso de set pero retorna el error.


//Creamos una ruta de aprendizaje
const ruta1 = createLearningPath({
    name: "Ruta 1",
    courses: ["curso 1", "curso 2", "curso 3"]
});


const ruta2 = createLearningPath({
    name: "Ruta 2",
    courses: ["curso a", "curso b", "curso c", "curso d"]
});

//Si las imprimimos, no podemos ver la data.
//Solo se nos muestra que hay un setter y un getter
console.log({
    ruta1,
    ruta2
});

////////////////
//Debemos meter las dos learning paths a nuestro usuario
luis.learningPaths = ruta1;
luis.learningPaths = ruta2;

console.log(luis); //Vemos que los nombre y las learning paths no son visibles.

//usamos get para ver las rutas de aprendizaje.
console.log(
    "Nombre de la ruta = ", luis.learningPaths[0].name,
    "Cursos de la ruta = ", luis.learningPaths[0].courses
);

console.log(
    "Nombre de la ruta = ", luis.learningPaths[1].name,
    "Cursos de la ruta = ", luis.learningPaths[1].courses
);

//Usamo set y luego get en las learning paths.
luis.learningPaths[0].name = "Ruta modificada 1";
luis.learningPaths[0].courses[0] = "Curso modificado";
console.log(
    "Nombre de la ruta = ", luis.learningPaths[0].name,
    "Cursos de la ruta = ", luis.learningPaths[0].courses
);