function calcularImc(peso, altura) {
    return peso / Math.pow(altura, 2);
}


function classificarImc(IMC){
    if(IMC < 18.5){
        return "Abaixo do Peso"
    } else if(IMC >= 18.5 && IMC <= 25){
        return "Peso Normal"
    } else if(IMC >= 25 && IMC <=30 ){
        return "Acima do Peso"
    } else if(IMC >= 30 && IMC<= 40 ){
        return "Obeso"
    } else {
        return "Obesidade Grave"
    }
    
}


function main(){
    const peso = 95
    const altura = 1.83

    const IMC = calcularImc(peso, altura)
    console.log(classificarImc(IMC))

}

main();


