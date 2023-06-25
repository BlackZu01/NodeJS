const estatusPedido = () => {
    return Math.random() < 0.8;
}

const miPedidoDePizza = new Promise((resolve, reject)=> {
    setTimeout(()=> {
        if (estatusPedido()) {
            resolve('You delivery was added successfully!');
        } else {
            reject('Your delivery could not be added!');
        }
    }, 100)
});

// const successAdded = (confirmationMessage) => {
//     console.log(confirmationMessage);
// }

// const failfureAdded = (reasonReject) => {
//     console.log(reasonReject);
// }

// miPedidoDePizza.then(successAdded, failfureAdded);

// Forma más compacta (Method Chaining)
miPedidoDePizza
    .then((confirmationMessage) => {
        console.log(confirmationMessage);
    })
    .catch((reasonReject) => {
        console.log(reasonReject);
    });