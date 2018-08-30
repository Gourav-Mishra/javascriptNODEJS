var readline=require('readline');
var utility= require('../utility/utility');
var read=readline.createInterface(
    {
        input:process.stdin,
        output:process.stdout
    }
);
function coupon()
{
  
    
        read.question("enter min coupon value:",function(min){
            read.question("enter max coupon value:",function(max){
                utility.coupon(min,max)
                read.close();

            });
        });
}
coupon();
