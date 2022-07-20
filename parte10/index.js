let nome = prompt('Nome da nave')
let velocidade = 0
let menu = prompt(`Escolha uma opção\n1-Acelerar a nave em 5km/s\n2-Desacelerar em 5km/s\n3-Imprimir dados de bordo\n4-Sair do programa`)

while(menu !=1 & menu !=2 & menu !=3 & menu != 4){
    menu = prompt(`Escolha uma opção\n1-Acelerar a nave em 5km/s\n2-Desacelerar em 5km/s\n3-Imprimir dados de bordo\n4-Sair do programa`)
}

function retornarAoMenu(){
    menu = prompt(`Escolha uma opção\n1-Acelerar a nave em 5km/s\n2-Desacelerar em 5km/s\n3-Imprimir dados de bordo\n4-Sair do programa`)
}

function imprimirDados(){
    alert(`A nave ${nome} está com ${velocidade} km/s`)
}

function aumentarVelocidade(){
    velocidade +=5
    alert(`A velocidade acelerou 5km/s e agora está a ${velocidade} km/s`)
    
}

function diminuirVelocidade(){
    if(velocidade == 0){
        menu =alert('A velocidade atual é de 0km/s, aumente sua velocidade primeiro')  
    }
    velocidade -= 5
}

function sair(){
    alert('Saindo do programa...')
}

if(menu == "1"){
    aumentarVelocidade();
    retornarAoMenu()
}

if(menu == "2"){
    diminuirVelocidade();
    retornarAoMenu()
}

if(menu == "3"){
    imprimirDados();
    retornarAoMenu()
}

if(menu == "4"){
       sair() 
}