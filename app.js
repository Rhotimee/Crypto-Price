const yargs = require('yargs');

const argv = yargs
    
    .help()
    .alias('help', 'h')
    .argv;

command = argv._[0].toUpperCase()    
console.log(command)