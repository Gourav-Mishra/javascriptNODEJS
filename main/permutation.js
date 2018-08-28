var prompt=require(`prompt-sync`)();
var utility=require(`../utility/utility.js`);

function permutation(str)
{
    var str=prompt("enter the string:")
    utility.permutation(str);
}
permutation();