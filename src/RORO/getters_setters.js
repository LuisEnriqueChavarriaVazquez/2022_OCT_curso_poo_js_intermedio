

function requiredParam(param) {
    throw new Error(param + " es obligatorio");
}

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
    };

    const public = {
        email,
        age,
        approvedCourses,
        learningPaths,
        socialMedia: {
            twitter,
            instagram,
            facebook,
        },
        ///////////////////////
        /*
        *   Lo que estamos haciendo es
        *   sustituir las viejas funciones por
        *   get y set 
        */
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
        //////////////////////
        // readName() {
        //   return private["_name"];
        // },
        // changeName(newName) {
        //   private["_name"] = newName;
        // },
    };

    // Object.defineProperty(public, "readName", {
    //   writable: false,
    //   configurable: false,
    // });
    // Object.defineProperty(public, "changeName", {
    //   writable: false,
    //   configurable: false,
    // });

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