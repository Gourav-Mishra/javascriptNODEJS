
/****************************************************************************** 
 * 
 *  Purpose         :  LEARNING  (OOPS concept)
 *  @description    :
 *  @file           : Inventory data management
 *  @module         : JSON (JAVA SCRIPT OBJECT NOTATION)
 *  @author         : BridgeLabz <GOURAV MISHRA>
 *  @since          : 11/09/2018
 *
 ******************************************************************************/
var fs = require('fs');
// Get content from file
 var data = fs.readFileSync("jason1.json");
 var obj=JSON.parse(data)
 console.log(obj)

 for(var i=0;i<obj.rice.length;i++)
 {
    var price= (obj.rice[i].weight)*(obj.rice[i].price)
    console.log("The price of "+ obj.rice[i].name+"  is: "+price )
 }
 for(var i=0;i<obj.pulse.length;i++)
 {
     var price=(obj.pulse[i].weight)*(obj.pulse[i].price);
     console.log("The price of "+ obj.pulse[i].name+"  is: "+price )

 }
 for(var i=0;i<obj.wheat.length;i++)
 {
     var price=(obj.wheat[i].weight)*(obj.wheat[i].price);
     console.log("The price of "+ obj.wheat[i].name+"  is: "+price)

 }

