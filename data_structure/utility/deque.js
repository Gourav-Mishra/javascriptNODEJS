/******************************************************************************
 *  Execution       :   1. default node         
 *                      
 *  Purpose         :  LEARNING DEQUE
 * 
 *  @description    
 * 
 *  @file           : utility.js(deque)
 *  @overview       : pallindrome.js
 *  @module         : utility
 *  @author         : BridgeLabz <GOURAV MISHRA>
 *  @version        : 1.0
 *  @since          : 7/09/2018
 *
 ******************************************************************************/
    
    function deque(){
    this.stack=new Array();
    this.popback=function() {
        return this.stack.pop();
    }
    this.pushback=function(item){
       this.stack.push(item);
    }
    this.popfront=function() {
        return this.stack.shift();
    }
    this.pushfront=function(item) {
        this.stack.unshift(item);

    }
    this.printdque=function() {
         var str=""
         for(var i=0;i<this.stack.length;i++)
         {
             str+=this.stack[i]+" ";
         }
         return str;
    }
    this.dqsize=function(){
        return this.stack.length;
    }
}

module.exports ={

    /**
     * @description Pallindrome implementation using dqueue,
     * 
     * @param string the input string is checked for pallindrome.
     * 
     */

    pallindrome: function (string) {
        var data = new deque();
        var arr = [];
        arr = string.split('');
        for (var i = 0; i < arr.length; i++) {
            data.pushback(arr[i]);
        }
        var flag = true;
        if (data.dqsize() % 2 == 0) {
            while (data.dqsize() > 0) {
                var a = data.popfront();
                var b = data.popback();
                if (a !== b) {
                    flag = false;
                }
            }
        } else {
            while (data.dqsize() > 1) {
                var a = data.popfront();
                var b = data.popback();
                if (a !== b) {
                    flag = false;
                }
            }
        }
        if (flag) {
            console.log("Pallindrome");
            process.exit();
        } else {
            console.log("Not a Pallindrome");
            process.exit();
        }
    }
        
    
}