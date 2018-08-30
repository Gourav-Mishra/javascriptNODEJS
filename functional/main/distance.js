var readline=require('readline');
var utility= require('../utility/utility');
var read=readline.createInterface(
    {
        input:process.stdin,
        output:process.stdout
    }
);
function distance()
{
  
    
        read.question("enter fist co-ordinate:",function(x){
            read.question("enter second co-ordinatevalue:",function(y){
                utility.distance(x,y)
                read.close();

            });
        });
}
distance();
