

// function recursiva(){
//     if(/*validacion o caso base o donde se detiene*/){
//         //llamadas recursiva
//     }else{
//         //Llamados normales sin recursividad al final
//     }
// }

const arrayNumeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let numero = 0;

function recursiva(array) {
    if (array.length != 0) {
        const firstNum = array[0];
        console.log(firstNum);
        array.shift();
        return recursiva(array);
    }
}
recursiva(arrayNumeros);