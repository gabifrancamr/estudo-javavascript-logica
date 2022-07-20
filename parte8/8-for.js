let name = prompt('Qual o nome da nave?')
let novoNome = ""

for(let pos = name.length - 1; pos >= 0; pos--){
    if(name[pos] == "e"){
        break
    }
    novoNome += name[pos];
}
alert(novoNome)

/*let name = prompt('Qual o nome da nave?');

let novoName = ""

for(let i = name.length - 1; i >= 0; i--){
    if(name[i] == "e"){
        break
    }
    novoName += name[i];
   
}
console.log(novoName) */