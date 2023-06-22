const EventEmitter = require('events');

const emisorProductos = new EventEmitter();

emisorProductos.on('compra', () => {
    console.log('La compra ha sido realizada exitosamente!');
})

emisorProductos.on('transaction', (paymentMethod) => {
    if (paymentMethod === 'debit' || paymentMethod === 'credit') {
        console.log('Your txn will be deliveried with express method!');
        return;
    }
    console.log('Your txn will be deliveried with economy method!')
})

customerAction = 'transaction';

// emisorProductos.emit('compra');

emisorProductos.emit(customerAction, 'debit');