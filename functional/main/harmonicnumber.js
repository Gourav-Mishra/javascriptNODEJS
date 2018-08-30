var readline=require('readline');
var utility= require('../utility/utility.js');
var read=readline.createInterface(
    {
        input:process.stdin,
        output:process.stdout
    }
);
function harmonic()
{
    read.question("enter the number of which we need the harmonic : ",function(userinput){
        utility.harmonic(userinput);
        read.close();
    }
    
);
}
harmonic();