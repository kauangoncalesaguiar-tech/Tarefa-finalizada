let nome = 'Kauan';
let idade = 19;

let mensagem = idade >= 18 ? 'Olá {nome} você é maior de idade'.replace('{nome}', nome) : 'Olá {nome} você é menor de idade'.replace('{nome}', nome);
console.log (mensagem);

let mensagem2 = nome + ' você tem ' + idade + ' anos';
console.log (mensagem2);