var readline=require('readline');
var utility= require('../utility/utility');
var read=readline.createInterface(
    {
        input:process.stdin,
        output:process.stdout
    }
);
function permutation()
{
  
    
        read.question("Enter a String:",function(string){
            
                utility.permutation(mystring)
                read.close();

            });
       
}
permutation();
