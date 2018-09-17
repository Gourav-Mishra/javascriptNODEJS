var read=require('readline-sync')
var namepattern=/^[a-zA-Z\\s]*$/;                         // validaton of first name
var pattern2=/^[a-zA-Z]+[\-'\s]?[a-zA-Z ]+$/              // validation of full name 
var fname=read.question("Enter Your Name: ")
if(!fname.match(namepattern))
{
  console.log("INVALID NAME ")
  fname=read.question("Please Enter your valid name: ")

}
var lname=read.question("Enter your last name: ")
if(!lname.match(namepattern))
{
  console.log("INVALID NAME ")
  lname=read.question("Please Enter your valid name: ")

}
var fullname=read.question("enter your full name: ")
if(!fullname.match(pattern2))
{
  console.log("INVALID NAME ")
  fullname=read.question("Please Enter your valid name: ")

}
var mobilenumber= read.question("Enter your Mobile number: ")
//var pattern=/^\d{10}$/
var pattern=/^(\+\d{1,3}[- ]?)?\d{10}$/// validation of mobile number
if(!mobilenumber.match(pattern))
{
  console.log("INVALID INPUT")
  mobilenumber=read.question("please enter a valid mobile number: ")
}
var date=new Date();

var student={
    '<<name>>':fname,
    '<<lastname>>':lname,
    '91­xxxxxxxxxx':mobilenumber,
    '<<full name>>':fullname,
    '01-01-2016':date.getDate()+"-"+date.getMonth()+"-"+date.getFullYear(),
  
}


var str="Hello <<name>>, We have your full name as <<full name>> in our system. your contact number is 91­xxxxxxxxxx.Please,let us know in case of any clarification Thank you BridgeLabz 01-01-2016."
console.log("STATEMENT : "+str)
 str = str.replace(/<<name>>|<<full name>>|91­xxxxxxxxxx|01-01-2016/gi, function(matched){
   return student[matched];
 });

 console.log("\n MODIFIED MESSAGE: "+str)