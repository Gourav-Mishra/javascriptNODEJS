var fs=require('fs');
var readline=require('readline')
var utility=require('../utility/ll.js');

var read=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

var data=fs.readFileSync('ordered.txt');
data=((data.toString()).toLocaleLowerCase()).split('');

function orderedList()
{
    read.question("enter the number to be searched: ",function(ele){
    utility.orderedList(data,ele);
    read.close();
});
}
orderedList();