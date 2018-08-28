var readline=require('readline');
var utility= require('../utility/utility');
var startTime=0;
var read=readline.createInterface(
    {
        input:process.stdin,
        output:process.stdout
    }
);
function stopwatch()
{
  read.question("Enter 1 to start: ",(start)=>{
      if(start==1){
          console.log("...wait untill you want to... ")
      startTime=  utility.getCurrentTime();
          read.question("enter 0 to stop :",(stop)=>{
           
            var stopTime= utility.getCurrentTime();
            var result= utility.getElapsedTime(startTime,stopTime)
            console.log("Elapsed time= "+ result  +"seconds");
              read.close();

          })
      }
  })

         
       
}
stopwatch();
