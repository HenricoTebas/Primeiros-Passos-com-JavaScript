/*3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Código Condição de pagamento:
1- À vista Débito, recebe 10% de desconto;
2- À vista no Dinheiro ou PIX, recebe 15% de desconto;
3- Em duas vezes, preço normal de etiqueta sem juros;
4- Acima de duas vezes, preço normal de etiqueta mais juros de 10%; */

const precoDoProduto = 100.00
const modoDePagamento = 4

if(modoDePagamento === 1){
    console.log(precoDoProduto - (precoDoProduto * 0.1))
}else if(modoDePagamento === 2){
    console.log(precoDoProduto - (precoDoProduto * 0.15))
} else if(modoDePagamento === 3){
    console.log(precoDoProduto)
}else if(modoDePagamento === 4){
    console.log(precoDoProduto + (precoDoProduto * 0.1))
}
