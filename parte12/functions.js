console.log(doubleSpeed(50))

let doubleSpeed = function(velocity){
    return velocity * 2
}

//vai dar erro.  função tradicional é lida antes de tudo nno código, já a função anonima: por serem atribuídas em váriaveis, seguem a regra da chamada de uma variável, o que provoca erro