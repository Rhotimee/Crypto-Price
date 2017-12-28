const yargs = require('yargs');
const request = require('request');

const argv = yargs
    
    .help()
    .alias('help', 'h')
    .argv;

command = argv._[0].toUpperCase()
command2 = argv._[0].toLowerCase()

request({
    url: `https://api.coinmarketcap.com/v1/ticker/`,
    json: true
}, (error, response, body) => {
    // console.log(body[0].name);
    for (let i = 0; i < body.length; i++){
        if (body[i].symbol === command || body[i].id === command2){
            console.log(`Name: ${body[i].name}`)
            console.log(`Current Price: $${body[i].price_usd} USD`)
            console.log(`Market Cap: $${body[i].market_cap_usd} USD`)
        }
    }
}
);