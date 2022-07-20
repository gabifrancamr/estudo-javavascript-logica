function speedUp(velocity, acceleration){
    let newVelocity = velocity + acceleration;
   console.log(`A nova velocidade é de ${newVelocity} km/s`)
    return newVelocity
}

let velocity = 80;
let acceleration = 10;

console.log(velocity)

velocity = speedUp(velocity, acceleration);

console.log(velocity)
