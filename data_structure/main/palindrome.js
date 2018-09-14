var readline=require('readline');
var utility= require('../utility/deque');
var read=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
function pallindrome()
{
    var input=read.question("Enter the string to be checked : ",function(string){
    utility.pallindrome(string);
    read.close();
});
}
pallindrome();