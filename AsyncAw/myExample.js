const EventEmitter = require('events');

const listener = new EventEmitter();
const types = ['debit', 'credit', 'bank account'];

const economy = (amount) => {
    console.log(`Your txn of ${amount} will arrive in 3-5 days!`)
}

const express = (amount) => {
    console.log(`Your txn of ${amount} will arrive inmediately!`)
}

listener.on('debit', express);
listener.on('credit', express);

listener.on('bank account', economy);


