

const {gets, print} = require('./funcoes-Auxiliares');                 // comando para importar as funcoes

const quantidadeDeAlunos = gets();
let maiorValor = 0;

for (let i = 0; i < quantidadeDeAlunos; i++) {
    const numeroSorteado = gets();
    if(numeroSorteado > maiorValor){
        maiorValor = numeroSorteado;
    }
    
}



print(maiorValor);
