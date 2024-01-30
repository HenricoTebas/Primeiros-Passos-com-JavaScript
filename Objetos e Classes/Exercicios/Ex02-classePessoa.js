/* 2) Crie uma classe para representar pessoas.
Para cada pessoa teremos os atributos nome, peso e altura.
As pessoas devem ter a capacidade de dizer o valor do seu Imc (Imc = peso / (altura * altura));
Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça ao José para dizer o valor
do seu Imc;  */

class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularImc(){
        return this.peso / (this.altura * this.altura);
    }

    classificarImc(){

        const Imc = this.calcularImc()

        if(Imc < 18.5){
            return ("Abaixo do Peso")
        } else if(Imc >= 18.5 && Imc <= 25){
            return ("Peso Normal")
        } else if(Imc >= 25 && Imc <=30 ){
            return ("Acima do Peso")
        } else if(Imc >= 30 && Imc<= 40 ){
            return ("Obeso")
        } else {
            return ("Obesidade Grave")
        }
    }
}

const jose = new Pessoa('José', 70, 1.75)
console.log(jose.classificarImc())