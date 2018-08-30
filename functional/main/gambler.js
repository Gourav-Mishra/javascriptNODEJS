'use strict'
var readline=require('readline');
var utility= require('../utility/utility.js');
var read=readline.createInterface(
    {
        input:process.stdin,
        output:process.stdout
    }
);
function gambler()
{
    
   { read.question("how many times you have to play:", function(userinput){
        read.question("Enter the starting balance(stake): ",function(startingbalance){
            read.question("enter your goal(closing balance): ",function(goal){
            
                utility.gambler(userinput,startingbalance,goal)
                read.close();
            });
        });
       
    });
}
}
gambler();