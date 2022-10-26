const obj = {};

// obj[1] = 0;
// obj[1]++;

// console.log(obj[1]);

for (let i = 0; i < 10000; i++) {
    let num = parseInt(Math.random() * 20) + 1;

    if (obj[num] == undefined) {
        obj[num] = 0;
    }

    obj[num]++;
}

console.log(obj);