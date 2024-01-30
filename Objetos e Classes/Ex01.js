const henrico = {                          //declarando um objeto com chaves e valores
    nome: 'Henrico Batista Tebas',
    idade: 26,

    descrever: function(){
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);      //declarando uma funcao dentro do objeto, this e o contexto, este.nome e o nome que esta no objeto
    }
}

henrico.altura = 1.83;  //adicionando uma chave e valor no objeto

//delete henrico.nome; comando para deletar algo

henrico.descrever()

