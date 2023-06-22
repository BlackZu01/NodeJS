const promesaCumplida = false;

const miPromesa = new Promise((resolve, reject)=> {
    setTimeout(() => {
        if (promesaCumplida) {
            resolve('Your promise has been fulfilled!');
        } else {
            reject('You promise has not been fulfilled!');
        }
    }, 1000);
});

const handleFulfilledPromise = (value) => {
    console.log(value);
}

const handleRejectedPromise = (rejectReason) => {
    console.log(rejectReason);
}

miPromesa.then(handleFulfilledPromise, handleRejectedPromise);