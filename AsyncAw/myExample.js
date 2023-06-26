const EventEmitter = require('events');

const listener = new EventEmitter();
const types = ['debit', 'credit', 'bank account'];

const economy = (amount) => {
    console.log(`Your txn of ${amount} will arrive in 3-5 days!`);
}

const express = (amount) => {
    console.log(`Your txn of ${amount} will arrive inmediately!`);
}

listener.on('debit', express);
listener.on('credit', express);

listener.on('bank account', economy);

const initTxn = (type, amount) => {
    console.log('Thanks a lot for trusting in Remitly!');
    return new Promise((resolve, reject) => {
        console.log('Initilizing transaction process...');
        setTimeout(() => {
            if (types.includes(type)) {
                resolve(listener.emit(type, amount));
            } else {
                reject('Invalid payment method !!');
            }
        }, 2000);
    });
}

const endingTxn = () => {
    return new Promise((resolve, reject) => {
        console.log('Tracking transaction...');
        setTimeout(() => {
            resolve('Transaction approved!');
        }, 3000);
    });
}

// initTxn('jeje', 773)
//     .then((response) => {
//         response;
//         return endingTxn();
//     })
//     .then((responseProcess)=> {
//         console.log(responseProcess);
//     })
//     .catch(error => {
//         console.log(error);
//     })

// Codigo equivalente a lo de arriba

const makeTxn = async (type, amount) => {
    const initializeTxn = await initTxn(type, amount); // No le hago console porque el resolve lo que esta emitiendo es un booleano por la libreria events
    const endTxn = await endingTxn();
    console.log(endTxn);
}

makeTxn('debit', 773);