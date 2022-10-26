let tiempo = 5;

const timer = setInterval(() => {
    console.log(`Queda: ${tiempo}`);
    tiempo--;

    if(tiempo == 0) {
        clearInterval(timer);
    }
}, 1000);

