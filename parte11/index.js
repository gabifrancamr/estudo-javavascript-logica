let nomeDaNave = prompt('Qual o nome da sua nave?');
let velocidadeDaNave = 0
let opcaoEscolhida

function mostraMenu(){
    let opcao
    while(opcao != "1" && opcao != "2" && opcao != "3" && opcao != "4"){
        opcao = prompt('Menu\n1-Acelerar 5km/s\n2-Desacelerar 5km/s\n3-Mostrar informações da nave\n4-Sair do menu')
    }
    return opcao
}

function acelerar(velocidade){
    novaVelocidade = velocidade + 5
    return novaVelocidade
}

function desacelerar(velocidade){
    novaVelocidade = velocidade - 5
    if(novaVelocidade<0){
        novaVelocidade = 0
    }
    return novaVelocidade
}

function informacoes(nome, velocidade){
    alert(`A nave chamada: ${nome} está a ${velocidade} km/s`)
}

function sair(){
    alert('Saindo do Menu...')
}


do{ 
    opcaoEscolhida = mostraMenu()
    switch(opcaoEscolhida){
        case "1":
            velocidadeDaNave = acelerar(velocidadeDaNave)
            break
        case "2":
            velocidadeDaNave = desacelerar(velocidadeDaNave)
            break
        case "3":
            informacoes(nomeDaNave, velocidadeDaNave)
            break
        default:
            sair()
    }
} while(opcaoEscolhida != "4")

