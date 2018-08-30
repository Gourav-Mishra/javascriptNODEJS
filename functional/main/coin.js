var readline=require('readline');
var utility= require('../utility/utility.js');
var read=readline.createInterface(
    {
        input:process.stdin,
        output:process.stdout
    }
);
function coin()
{
    read.question("Enter number of times coin to be flipped : ",function(userinput){
        utility.coin(userinput);
        read.close();
    }
    
);
}
coin();