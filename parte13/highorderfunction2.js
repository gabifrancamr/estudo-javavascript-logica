function doubleVelocity(velocity, printer){
    console.log('ENtrei em doubleVelocity')
    let newVelocity = velocity * 2
    printer(newVelocity)
    return newVelocity
}

let anotherVelocity = doubleVelocity(50, velocity =>{
    console.log('Outra velocidade: ' + velocity)
})

/*let anotherVelocity = doubleVelocity(50, function (velocity){
    console.log('Outra velocidade: ' + velocity)
}) */