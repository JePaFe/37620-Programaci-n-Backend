const multiplicar = (num1, num2) => {
    if (typeof num1 !== 'number' || typeof num2 != 'number') {
        return Promise.reject('Los args tiene que ser números')
    }
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                num1, 
                num2, 
                result: num1 * num2
            })
        }, Math.floor(Math.random()*1000))
    })
}

multiplicar('a', 2)
    .then(response => {
        console.log(`${response.num1} * ${response.num2} = ${response.result}`);
        return multiplicar(2, 2)
    })
    .then(response => {
        console.log(`${response.num1} * ${response.num2} = ${response.result}`);
        return multiplicar(3, 2)
    })
    .then(response => {
        console.log(`${response.num1} * ${response.num2} = ${response.result}`);
    })
    .catch(error => console.log(error))
