class pessoa {
    nome;
    idade;
    anoDeNascimento;

    constructor(nome, idade, ){                                                // usa constructor quando a classe precisa ser intanciada
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2023 - idade;
    }

    descrever(){                                                                              //dentro da classe n precisa usar a palavre function
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}, ano de nascimento: ${this.anoDeNascimento}`);
    }
}

function compararPessoas(p1, p2){                                            //criando uma função usando as chaves da classe para comparação de idade
    if (p1.idade > p2.idade) {
        console.log(`${p1.nome} é mais velho(a) que ${p2.nome}`);
    } else if (p2.idade > p1.idade){
        console.log(`${p2.nome} é mais velho(a) que ${p1.nome}`);
    } else{
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade`);
    }
}


const henrico = new pessoa('Henrico', 26);         
const renan = new pessoa('Renan', 30);

compararPessoas(henrico, renan);