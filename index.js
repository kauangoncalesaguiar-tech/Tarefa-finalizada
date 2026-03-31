const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite o primeiro número: ', (answer1) => {

    rl.question('Digite o segundo número: ', (answer2) => {
        
       
        let num1 = parseFloat(answer1);
        let num2 = parseFloat(answer2);

   
        
        // Soma 
        let soma = num1 + num2;
        let resultSoma = 'Sua soma deu ' + soma;

        // Subtração
        let sub = 50 - 25;
        let resultSub = 'Sua subtração deu ' + sub;

        // Multiplicação
        let mult = 34 * 87;
        let ResultMult = 'Sua multiplicação deu ' + mult;

        // Divisão
        let div = 100 / 4;
        let ResultDiv = 'Sua divisão deu ' + div;

        // Verificação
        let verif = 10 == 10 ? 'Números iguais' : 'Nomes diferente';
        let nome1 = 'Styles';
        let nome2 = 'Peter';
        let verif2 = nome1 != nome2 ? 'Nomes diferentes' : 'Nomes iguais';

        // Maioridade
        let idade = 14;
        let verofidade = idade >= 18 ? 'Maior de Idade' : 'Menor de Idade';

        // Placeholder com Template String
        let nomeUser = 'Kauan';
        let mensagem = `Olá ${nomeUser}`;

       //Consoles.log
        console.log("\n--- RESULTADOS ---");
        console.log(resultSoma);
        console.log(resultSub);
        console.log(ResultMult);
        console.log(ResultDiv);
        console.log(verif);
        console.log(verif2);
        console.log(verofidade);
        console.log(mensagem);

        rl.close();
    });
});