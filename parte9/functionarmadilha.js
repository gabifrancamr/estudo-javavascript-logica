function speedUp(velocity, acceleration, unit = "Km/s"){
    let newVelocity = velocity + acceleration
    alert(`A nova velocidade é de ${newVelocity} ${unit}`)
}

speedUp(50, 20)

//se há uma declaração padrão ela tem que vir por último, o JS lê na ordem e misturar pode causar uma bagunça