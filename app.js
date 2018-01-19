const yargs = require('yargs');
const crypto = require('./crypto-price/crypto');

// const titleOption = {
//     describe: 'Get Note',
//     demand: false,
//     alias: 'g'
// }

const argv = yargs
    
    // .command('get', 'Get the price of any crypto',{
    //     title : titleOption
    // 
    // })
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
// if (firstArg === 'get'){
//     console.log(argv)
// }

// else{

let command = toVerify(firstArg);

crypto.getCrypto(command).then((msg) => {
    cryptoPrice = msg.currentPrice;
    console.log(msg.name);
    console.log(`1 ${command} = $${msg.currentPrice} USD`);
    console.log(`Market Cap: $${msg.marketCap}`)
    
}, (errorMessage) => {
    console.log('Error: ', errorMessage)
})

// }
