const prompt = require("prompt-sync")();
const alunos = [];
const idadeMaior = [];
const idadeMenor = [];

const modelo = () => {
    const nomeAluno = prompt("Nome do aluno: ");
    const dataNascimento = parseInt(prompt("Ano de nascimento (AAAA): "), 10);
    const curso = prompt("Descrição do curso: ");
    const periodo = prompt("Qual o período: ");
    if (nomeAluno !== "" && curso !==
        "" && periodo !== "" &&
        !isNaN(dataNascimento)) {
        return {
            nomeAluno,
            dataNascimento,
            curso,
            periodo,
        };
    } else {
        console.log("Dados inválidos");
        return undefined;
    }
};
const criar = () => {
    const aluno = modelo();
    if (aluno !== undefined) {
        alunos.push(aluno);
        console.log("Aluno cadastrado com sucesso");
        console.log(alunos);
    }
};
module.exports.criar = criar
const listar = () => {
    if (alunos.length === 0) {
        console.log("Nenhum aluno foi encontrado ");
        return false;
    } else {
        alunos.forEach((aluno, indice) => {
            console.log(`
    ${indice + 1}.
    Nome do Aluno:
     ${aluno.nomeAluno}
    Ano de Nascimento:
    ${aluno.dataNascimento}
    Curso: ${aluno.curso}
    Período: ${aluno.periodo}
    ` );
        });
        return true;
    }
};
module.exports.listar = listar
const remover = () => {
    const indice = parseInt(prompt("Qual indice você deseja remover? "), 10) - 1;
    alunos.splice(indice, 1);
    console.log("Aluno removido com sucesso");
    console.log(alunos);
};
module.exports.remover = remover
const atualizar = () => {
    const indice = parseInt(prompt("Qual o indice que deseja atualizar? "), 10) - 1;
    const nomeAluno = prompt("Nome do aluno: ");
    const dataNascimento = parseInt(prompt("Ano de nascimento (AAAA): "), 10);
    const curso = prompt("Descrição do curso: ");
    const periodo = prompt("Qual o período: ");
    const aluno = {
        nomeAluno,
        dataNascimento,
        curso,
        periodo,
    };
    if (!isNaN(dataNascimento) && aluno !== undefined) {
        alunos[indice] = aluno;
        console.log("Aluno atualizado com sucesso");
        console.log(alunos);
    } else {
        console.log("Falha na atualização, tente novamente");
        atualizar()
    }
};
module.exports.atualizar = atualizar

const maiorDeIdade = () => {
    const data = +prompt('Digite o ano atual: ')
    alunos.forEach(element => {
        if(element.dataNascimento > 2005){
            idadeMaior.push(element.nomeAluno)
        } else {
            idadeMenor.push(element.nomeAluno)
        }
    });
    console.log(`${idadeMaior.length} alunos maiores de idade.`)
    console.log(`${idadeMenor.length} alunos menores de idade.`)
}
module.exports.maiorDeIdade = maiorDeIdade