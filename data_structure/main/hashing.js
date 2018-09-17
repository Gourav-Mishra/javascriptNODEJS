var fs = require('fs');
var readsync = require("readline-sync");
var readline=require('readline');
var util = require('/home/gourav/JAVASCRIPT/data_structure/utility/linkedlist.js');


var read = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function hashing() {
        
            util.hashing(fs,readsync);
            read.close();        
}
hashing();