const nome1 = prompt('Vou pedir informação sobre duas pessoas.\n Informe o NOME da pessoa mais velha:');
const idade1 = Number(prompt('Informe a IDADE da pessoa mais velha:'));
const nome2 = prompt('NOME da pessoa mais nova:');
const idade2 = Number(prompt('IDADE da pessoa mais nova:'));

const diferenca = idade1 - idade2;

alert(`A diferença de idade entre ${nome1} e ${nome2} é de ${diferenca} anos`)

