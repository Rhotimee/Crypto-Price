const yargs = require('yargs');
const request = require('request');

const argv = yargs
    
    .help()
    .alias('help', 'h')
    .argv;

let command, command2;
let x = argv._[0];

if (typeof x === 'string'){
    command = x.toUpperCase(); command2 = x.toLowerCase() ;
} else {
    command = ''+x;
}

// let command = argv._[0].toUpperCase();

// let command2 = argv._[0].toLowerCase();

request({
    url: `https://api.coinmarketcap.com/v1/ticker/`,
    json: true
}, (error, response, body) => {

    if (!error && response.statusCode === 200){
        for (let i = 0; i < body.length; i++){
            if (body[i].symbol === command || body[i].id === command2){
                console.log(`Name: ${body[i].name}`);
                console.log(`Current Price: $${body[i].price_usd} USD`);
                console.log(`Market Cap: $${body[i].market_cap_usd} USD`);
                break;
            } else {
                console.log(`${argv._[0]} could not be found`); break;
            }
        } 
    } else {console.log(`The server could not be reached`)}   
});