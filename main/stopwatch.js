var readline=require('readline');
var utility= require('../utility/utility');
var read=readline.createInterface(
    {
        input:process.stdin,
        output:process.stdout
    }
);
function stopwatch()
{
  read.question("Enter 1 to start: ",()=>{
      if(start){
        utility.getCurrentTime(start);
          utility.question("enter 0 to stop :",()=>{
           
              utility.getElapsedTime(stop);
              console.log("Elapsed time= "+ (stop-start)  +"seconds");
              

          })
      }
  })

         
       
}
stopwatch();
