function speedUp(velocity, acceleration){
    let newVelocity = velocity + acceleration;
   console.log(`A nova velocidade é de ${newVelocity} km/s`)
    return newVelocity
}

//console.log(speedUp(90, 10))
speedUp(100, 20)