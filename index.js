// Números 
    let num1 = 324;
    let num2 = 1324;

//Soma
    let soma = num1 + num2
    let resultSoma = 'Sua soma deu ' + soma;

//Subtração
    let sub = 50 - 25
    let resultSub = 'Sua subtração deu ' + sub;
// Multplicação
    let mult = 34 * 87
    let ResultMult = 'Sua multiplicação deu ' + mult;
//Divisão
    let div = 100 / 4
    let ResultDiv = 'Sua divisão deu ' + div

// Igualdade
    let verif = 10 == 10 ? 'Números iguais' : 'Nomes diferente';
// Diferença
    let nome1 = 'Styles';
    let nome2 = 'Peter';
let verif2 = nome1 != nome2 ? 'Nomes diferentes' : 'Nomes iguais';
//Menor que 
    let verif3 = 5 < 10 ? 'Menor' : 'Maior';

//Menor ou igual
let preço = 50.35;
let verifpreço = preço > 50 ? 'Preço maior' : 'Preço menor';

//Menor ou Igual
function verifMenorIgual (num3) {
    if (num3 == 20) {
        return 'Valor é igual a 20';
    } else if (num3 < 20) {
    return 'Valor é menor que 20';
    } else {
        return 'Valor é maior que 20';
    }
    }
    
//Maior ou igual
let idade = 14;
let verofidade = idade >= 18 ?  'Maior de Idade' : 'Menor de Idade';

//Atribuição condicional
let nota = 8
let verifnota = nota >= 7 ? 'Aprovado' : 'Reprovado';

//Verificação de Maioridade
let idade2 = 19
let verofidade2 = idade2 >= 18 ? 'Maior' : 'Menor';

//PlaceHolder
let nome = 'Kauan';
let mensagem = 'Olá (nome)'.replace('(nome)', nome);

//Compra
let produto = 'Pacote 5 kg Arroz';
let preço2 = 8.99;
let quantidade = 2;
let mensagemcompra = 'Você comprou ' + quantidade + ' ' + produto + ' por ' + preço2;







console.log(resultSoma);
console.log(resultSub);
console.log(ResultMult);
console.log(ResultDiv);
console.log(verif);
console.log(verif2);
console.log(verif3);
console.log(verifpreço);
console.log(verifMenorIgual(5));
console.log(verofidade);
console.log(verifnota);
console.log(verofidade2);
console.log(mensagem);
console.log(mensagemcompra);

