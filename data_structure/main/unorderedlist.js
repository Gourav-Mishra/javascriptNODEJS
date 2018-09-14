var fs=require('fs');
var readline=require('readline');
var utility= require('/home/gourav/JAVASCRIPT/data_structure/utility/linkedlist.js');
var read=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

var data =fs.readFileSync('/home/gourav/JAVASCRIPT/data_structure/main/textunordered','utf8');
//data=((data.toStringfunction()).toLocalLowerCase()).split(' ');
data=data.split(' ');
//console.log(data);

function unorderedlist()
{
    read.question("Enter the Element you want to Search : ",function(ele){
        var list = new utility();

        for(let i=0;i<data.length-1;i++) {
            list.add(data[i]);
        }

        list.printList();

        if(list.indexOf(ele)== -1) {
            list.add(ele);
        }
        else {
            list.removeElement(ele);
        }
        list.printList();

        read.close();
    });
}
unorderedlist();
