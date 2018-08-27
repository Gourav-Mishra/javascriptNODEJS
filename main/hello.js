var readline=require('readline');
var utility= require('../utility/utility');
var read=readline.createInterface(
    {
        input:process.stdin,
        output:process.stdout
    }
);
function hello()
{
  
    read.question("enter user name:",function(userinput){
        utility.hello(userinput);
        read.close();
    });
}
hello();
