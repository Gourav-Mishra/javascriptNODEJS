var readline=require('readline');
var utility= require('../utility/stack');
var read=readline.createInterface(
    {
        input:process.stdin,
        output:process.stdout
    }
);
function balancedparanthesis()
{
    read.question("Enter the Expression:  ",function(expression){
        utility.balancedparanthesis(expression);
        read.close();
    }
    
);
}
balancedparanthesis();