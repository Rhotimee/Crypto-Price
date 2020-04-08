const yargs = require('yargs');
const crypto = require('./crypto-price/crypto');

const argv = yargs
    .help()
    .alias('help', 'h')
    .argv;

let firstArg = argv._[0];

let toVerify = (arg) => {
    if (typeof arg === 'string'){
        return arg.toUpperCase();
    } else {
        return ''+arg;
    }
};

let command = toVerify(firstArg);

crypto.getCrypto(command).then((msg) => {
    cryptoPrice = msg.currentPrice;
    console.log(msg.name);
    console.log(`1 ${command} = $${msg.currentPrice} USD`);
    console.log(`Market Cap: $${msg.marketCap}`)
    
}, (errorMessage) => {
    console.log('Error: ', errorMessage)
})
