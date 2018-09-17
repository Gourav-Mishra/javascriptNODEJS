var read=require('readline-sync');
var utility=require('../utility/queue');
function banking()
{
    var input=read.question("Enter the number of person standing in queue: ")
    utility.banking(read,input);
}
banking();