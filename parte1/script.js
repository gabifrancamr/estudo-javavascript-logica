const nome1 = prompt('Vou pedir informação sobre duas pessoas. Informe o nome da pessoa mais velha:');
const idade1 = Number(prompt('Informe a idade da pessoa mais velha:'));
const nome2 = prompt('Nome da pessoa mais nova:');
const idade2 = Number(prompt('Idade da pessoa mais nova:'));

const diferenca = idade1 - idade2;

alert(`A diferença de idade entre ${nome1} e ${nome2} é de ${diferenca} anos`)

