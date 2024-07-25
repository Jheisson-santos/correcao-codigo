const prompt = require("prompt-sync")();
const funcao = require('./exercicio.js');
while(true){
console.log(`
        Bem vindo ao sistema de cadastro de alunos.
        Escolha uma das opções abaixo:
        1 - Cadastrar um novo aluno
        2 - Atualizar um cadastro de um aluno
        3 - Remover um cadastro de um aluno
        4 - Listar todos os alunos
        5 - Listar quantia de alunos maior de 18 e menor de 18
        9 - Sair
`);
let opcao = prompt('');

switch (opcao) {
    case '1':
        funcao.criar();
        break;
    case '2':
        funcao.atualizar();
        break;
    case '3':
        funcao.remover();
        break;
    case '4':
        funcao.listar();
        break;
    case '5':
        funcao.maiorDeIdade();
        break;
    case '9':
        process.exit();
        break;
    default:
        console.log('Opção inválida!');
        break;
}
}