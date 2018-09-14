var fs = require('fs');
var readline = require('readline')
var utility= require('../utility/queue');


var read = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


var data = fs.readFileSync('hash.txt');
data = (data.toString()).split(',');

function hashing() {
        
            utility.hashing(data);
            read.close();        
}
hashing();