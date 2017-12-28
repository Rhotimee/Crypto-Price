import { error } from 'util';

const yargs = require('yargs');
const request = require('request');

const argv = yargs
    
    .help()
    .alias('help', 'h')
    .argv;

command = argv._[0].toUpperCase()    
console.log(command)

request({
    url: `https://api.coinmarketcap.com/v1/ticker/`,
    json: true
}, (error, response, body) => {
    console.log(error);
    console.log(response && response.statusCode)
    console.log(body)
}
);