
const entradas = [5, 50, 10, 97, 23, 55, 74, 1, 7, 99 ];
let i = 0;

function gets(){
    const valor = entradas[i];
    i++;
    return valor;
}

function print(texto){
    console.log(texto);
}

 
module.exports = {gets, print}                                                                       //Comando para exportar os objetos com as funcoes gets e print                                   