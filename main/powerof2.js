//var readline=require('readline');
var utility= require('../utility/utility.js');
/*var read=readline.createInterface(
    {
        input:process.stdin,
        output:process.stdout
    }
);
*/
'use strict';
const args=require('yargs').argv;
function powerof2()
{
   /* read.question("you want the table till:" , function(userinput){
        utility.power(userinput);
        read.close();
    });
    */
   n=args.userinput;
   utility.powerof2(n);
}
powerof2();