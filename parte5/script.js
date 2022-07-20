let contagem = 0
let nome = prompt("Informe o nome da sua nave espacial")
let resposta = prompt('Deseja realizar a próxima dobra?\n1-Sim\n2-Não\nDigite apenas o número')
while (resposta == '1'){
    contagem++
    resposta = prompt('Deseja realizar a próxima dobra?\n1-Sim\n2-Não\nDigite apenas o número')
}
alert("Nave: " + nome + "\nQuantidade de dobras: " + contagem)