const EventEmitter = require('events');

const tierCx = 2000;
const paymentUser = {
    'requirement': 'send transaction',
    'type': 'debit',
    'funds': 1000
}

const listener = new EventEmitter();

listener.on('send transaction', (paymentMethod) => {
    if (paymentMethod === 'debit' || paymentMethod === 'credit') {
        console.log('Your txn will be delivered with express method!')
        return;
    } 
    console.log('Your txn will be delivered with economy method!');
    return;
});

const transactionPayment = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (paymentUser.funds < tierCx) {
            resolve(listener.emit(paymentUser.requirement, paymentUser.type));
        } else {
            reject('The amount you want to send exceed your tier limit to send!')
        }
    }, 100);
});

const transactionCompleted = (value) => {
    value;
};

const transactionDenied = (reasonReject) => {
    reasonReject;
};

transactionPayment.then(transactionCompleted, transactionDenied);

