//Números
let num1 = 25;
let num2 = 69;

// Soma
let soma = num1 + num2;

//Subtração
let sub = num1 - num2;

// Mostrar ao úsuario
let mensagem = 'Sua soma deu, {soma}! e sua subtração deu {sub}!.'
  .replace('{soma}', soma)
  .replace('{sub}', sub);
console.log(mensagem);

// Condição Soma
let vSoma = soma >= 100 ? 'A soma é maior que 100' : 'A soma é menor que 100';
console.log(vSoma);

// Condição Subtração
let vSub = sub <= 0 ? 'A subtração é menor que 0' : 'A subtração é maior que 0';
console.log(vSub);
