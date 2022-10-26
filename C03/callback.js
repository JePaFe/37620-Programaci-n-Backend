const multiplicar = (num1, num2, callback) => {
    setTimeout(() => {
        callback(num1, num2, num1 * num2)
    }, Math.floor(Math.random()*1000))
    // callback(num1, num2, num1 * num2)
}

multiplicar(1, 2, (num1, num2, resultado) => {
    console.log(`${num1} * ${num2} = ${resultado}`)
})

multiplicar(2, 2, (num1, num2, resultado) => {
    console.log(`${num1} * ${num2} = ${resultado}`)
})

multiplicar(3, 2, (num1, num2, resultado) => {
    console.log(`${num1} * ${num2} = ${resultado}`)
})

multiplicar(4, 2, (num1, num2, resultado) => {
    console.log(`${num1} * ${num2} = ${resultado}`)
})

// multiplicar(1, 2, (num1, num2, resultado) => {
//     console.log(`${num1} * ${num2} = ${resultado}`)
//     multiplicar(2, 2, (num1, num2, resultado) => {
//         console.log(`${num1} * ${num2} = ${resultado}`)
//         multiplicar(3, 2, (num1, num2, resultado) => {
//             console.log(`${num1} * ${num2} = ${resultado}`)
//             multiplicar(4, 2, (num1, num2, resultado) => {
//                 console.log(`${num1} * ${num2} = ${resultado}`)
//                 multiplicar(5, 2, (num1, num2, resultado) => {
//                     console.log(`${num1} * ${num2} = ${resultado}`)
//                 })
//             })
//         })
//     })
// })

