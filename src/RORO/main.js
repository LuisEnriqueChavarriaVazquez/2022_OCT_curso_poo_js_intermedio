//La funcion de deep copy que hemos creado
function isObject(subject) {
    return typeof subject == "object";
}

function isArray(subject) {
    return Array.isArray(subject);
}

function deepCopy(subject) {
    let copySubject;

    const subjectIsObject = isObject(subject);
    const subjectIsArray = isArray(subject);

    if (subjectIsArray) {
        copySubject = [];
    } else if (subjectIsObject) {
        copySubject = {};
    } else {
        return subject;
    }

    for (key in subject) {
        const keyIsObject = isObject(subject[key]);

        if (keyIsObject) {
            copySubject[key] = deepCopy(subject[key]);
        } else {
            if (subjectIsArray) {
                copySubject.push(subject[key]);
            } else {
                copySubject[key] = subject[key];
            }
        }
    }

    return copySubject;
}

//Factory pattern
/*
*   RORO significa que vamos a recibir un
*   objeto y después vamos a retornar otro
*   objeto. 
*/

//Paso 1.
/*
*   Estamos haciendo una funcion que
*   verifica si los atributos del objeto
*   son obligatorios.
*/
function requiredParam(param) {
    throw new Error(param + " es obligatorio");
}

//Paso 2
/*
*   Creamos una mini fabrica de objetos
*   literales, en donde como estamos pasando
*   objetos no importa el orden de los elementos.
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
    return { //Este es el objeto que vamos a retornar
        name,
        mail,
        edad,
        socialmedia:{
            twitter,
            facebook,
            instagram
        },
        approvedCourses,
        learningPaths
    }
}

//Creamos nuestro objeto literal.
//Con los valores obligatorios y los demas valores
//son undefined.
const luis = createStudent({
    name: "Luis",
    mail: "luisechvz@gmail.com"
});

// const manuela = createStudent({
//     name: "manuela"
// });

console.log(luis);