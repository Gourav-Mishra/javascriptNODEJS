var readline=require('readline');
var utility= require('../utility/utility');
var read=readline.createInterface(
    {
        input:process.stdin,
        output:process.stdout
    }
);
function triplet()
{
    read.question("Enter the size of the array: ",function(val){
     utility.triplet(read,val)
        
    });
        
}
triplet();
