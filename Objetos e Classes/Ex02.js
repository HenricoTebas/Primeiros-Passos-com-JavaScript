class pessoa {
    nome;
    idade;

    descrever(){                                                                              //dentro da classe n precisa usar a palavre function
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}

const henrico = new pessoa();         //instanciando uma nova pessoa na classe

henrico.nome = 'Henrico Barista Tebas'
henrico.idade = 26


const renan = new pessoa();

renan.nome = 'Renan J Paula'
renan.idade = 30

henrico.descrever();
renan.descrever();
