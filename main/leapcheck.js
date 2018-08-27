var readline=require('readline');
var utility= require('../utility/utility.js');
var read=readline.createInterface(
    {
        input:process.stdin,
        output:process.stdout
    }
);
function leapcheck()
{
    read.question("enter year: ", function(userinput){
        utility.leapcheck(userinput);
        read.close();
    });
}
leapcheck();