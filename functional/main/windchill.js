var readline=require('readline');
var utility= require('../utility/utility');
var read=readline.createInterface(
    {
        input:process.stdin,
        output:process.stdout
    }
);
function windchill()
{
  
    
        read.question("Enter the temperature :",function(temperature){
            read.question("Enter the velocity:",function(velocity){
                utility.windchill(temperature,velocity)
                read.close();

            });
        });
}
windchill();
