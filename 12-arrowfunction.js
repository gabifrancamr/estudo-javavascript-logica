//simplificação de uma função anônima!

const doubleVelocity = (velocity) => {
    return velocity * 2
}

/*ou :
    const doubleVelocity = (velocity) => velocity * 2
    ou:
    const doubleVelocity = velocity => velocity * 2
*/

console.log(doubleVelocity(60))

/*se não houver parâmetro:
const doubleVelocity = () => {
    
} */