var readline=require('readline');
var utility= require('../utility/utility');
var read=readline.createInterface(
    {
        input:process.stdin,
        output:process.stdout
    }
);
function twoDArray()
{
  
    
        read.question("Enter the no of rows you want :",function(row){
            read.question("Enter the number of column you want :",function(col){
                utility.twoDArray(read,row,col)
                read.close();

            });
        });
}
twoDArray();
