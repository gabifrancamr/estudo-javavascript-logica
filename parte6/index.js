let nome = prompt('Informe o nome da espaçonave');
let subst1 = prompt(`Qual caractere substituir em ${nome}?`);
let subst2 = prompt(`Substituir ${subst1} por qual caractere?`);
let novoNome = "";

for(let i =0; i<nome.length; i++){
    if(nome[i] == subst1){
        novoNome += subst2
    } else {
        novoNome += nome[i]
    }
}

alert('O novo nome da nave é: ' + novoNome)