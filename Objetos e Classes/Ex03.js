class pessoa {
    nome;
    idade;
    anoDeNascimento;

    constructor(nome, idade, ){                        // usa constructor quando a classe precisa ser instanciada
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2023 - idade;
    }

    descrever(){                                                                              //dentro da classe n precisa usar a palavre function
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}, ano de nascimento: ${this.anoDeNascimento}`);
    }
}

const henrico = new pessoa('Henrico', 26);         //instanciando uma nova pessoa na classe

const renan = new pessoa('Renan', 30);


henrico.descrever();
renan.descrever();
