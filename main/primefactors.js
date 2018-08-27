var readline=require('readline');
var utility= require('../utility/utility');
var read=readline.createInterface(
    {
        input:process.stdin,
        output:process.stdout
    }
);
function primefactor()
{
  
    read.question("enter the number of which you want to get prime factors:",function(number){
        utility.primefactor(number);
        read.close();
    });
}
primefactor();
