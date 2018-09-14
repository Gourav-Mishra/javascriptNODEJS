/******************************************************************************
 *  Execution       :   1. default node         
 *                      
 *  Purpose         :  LEARNING Queue
 * 
 *  @description    
 * 
 *  @file           : utility.js(queue.js)
 *  @overview       : banking.js,hashing.js,anagramqueue.js
 *  @module         : utility
 *  @author         : BridgeLabz <GOURAV MISHRA>
 *  @version        : 1.0
 *  @since          : 8/09/2018
 *
 ******************************************************************************/
class Node {
    constructor(data, next = null) {
        this.data = data,
            this.next = next
    }
}
class Queue {
    constructor() {
        this.tail = null;
        this.head = null;
    }


    enqueue(item) {
        let node = new Node(item)
        if (!this.head) {
            this.head = node
            this.tail = node
        } else {
            this.tail.next = node
            this.tail = node
        }
    }


    dequeue() {
        if (!this.head) {
            return 'No item'
        } else {
            let itemToPop = this.head
            this.head = this.head.next
            return itemToPop
        }
    }

    len() {
        let current, counter
        [current, counter] = [this.head, 0]
        while (current) {
            counter++
            current = current.next
        }
        return counter;
    }

    peek() {
        if (this.head) {
            return this.head.data
        } else {
            return 'Empty'
        }
    }

    isEmpty() {
        return this.len() < 1;
    }
    printque()
    {
        var curr=this.head;
        while(curr){
            console.log(curr.data);
            curr=curr.next;
        }
    }



}


module.exports = {
    /**
     * @description This program is a banking platform in which there are a set of bankers standing in a queue
     *              Here I am providing whith 3 options, to view balance ,to withdraw ,to deposite money.
     * @param read readline is used,to take input from user.
     * @param number the number of persons in queue.
     *  
     */
    banking: function (read, number) {
        var queue = new Queue();
        var balance = 5000;
        for (var i = 0; i < number; i++) {
            queue.enqueue(i);

        }

        while (queue.len()) {
            var option = read.question("Enter 1 to Display Balance, 2 to Deposit Amount  and 3 to Withdraw  Amount")
            switch (option) {
                case '1': console.log("Your Account Ballance is: "+balance)
                break;

                case '2': var deposit = read.question("Enter the amount you want to Deposit in INR ")
                    deposit = parseInt(deposit);
                    balance = balance + deposit;
                    console.log("Your NEW Balance= " + balance + " INR");
                    break;


                case '3': var withdraw = read.question("enter the amount you want to withdraw in INR")
                    if (balance < withdraw) {
                        console.log("SORRY !!! Insufficient Funds...")

                    } else {
                        balance = balance - withdraw;
                        console.log("Your Balance  After Withdrawal is: " + balance + " INR")

                    }
                    break;
                default: console.log("Sorry :-( Your Request Cant be processed....")
            }
            queue.dequeue();
        }
    },
/**
 * @description this a hashing implementation ,in which the file is read from file and then arranged in a array in a certain order .
 * @param data the number input in the file.
 */
    
    hashing: function (data) {
        var fs=require('fs');
        var array = [], arr0 = [], arr1 = [], arr2 = [], arr3 = [], arr4 = [], arr5 = [], arr6 = [], arr7 = [], arr8 = [], arr9 = [];
        for (var i = 0; i < data.length; i++) {
            if ((data[i] % 11) === 0) {
                arr0.push(data[i]);
            } else if ((data[i] % 11) === 1) {
                arr1.push(data[i]);
            } else if ((data[i] % 11) === 2) {
                arr2.push(data[i]);
            } else if ((data[i] % 11) === 3) {
                arr3.push(data[i]);
            } else if ((data[i] % 11) === 4) {
                arr4.push(data[i]);
            } else if ((data[i] % 11) === 5) {
                arr5.push(data[i]);
            } else if ((data[i] % 11) === 6) {
                arr6.push(data[i]);
            } else if ((data[i] % 11) === 7) {
                arr7.push(data[i]);
            } else if ((data[i] % 11) === 8) {
                arr8.push(data[i]);
            } else if ((data[i] % 11) === 9) {
                arr9.push(data[i]);
            }
        }
        array.push(arr0);
        array.push(arr1);
        array.push(arr2);
        array.push(arr3);
        array.push(arr4);
        array.push(arr5);
        array.push(arr6);
        array.push(arr7);
        array.push(arr8);
        array.push(arr9);
        
        for (var i = 0; i < array.length; i++) {
           /*var p= array[i].join('->');
            try {
                fs.writeFileSync('hash_op.txt',
                
                (`${i}th slot: ` + p) , { mode: 0o755 });
              } catch(err) {
                // An error occurred
                console.error(err);
              }*/
            console.log(`${i}th slot: ` + array[i].join('->'));
        }
    
        
    },
    /**                     
     * @description In this program the prime numbers which are annagram are printed using queue,
     *               in this program the prime number  is used as the input array .
     *               The prime number is calculated in range 0-1000.
     *               further the anagram in that range is calculated and printed in the array.
     *          
     */

    anagramQueue: function () {
        var q1 = new Queue();
        var q2 = new Queue();
        var arr = [], arr1 = [], arr2 = [], arr3 = [], str = "", array = [];
        var flag, i;

        for (i = 0; i < 1000; i++) {
            flag = 1;
            for (var j = 2; j <= i / 2; j++) {
                if (i % j === 0) {
                    flag = 0;
                    break;
                }
            }
            if (flag === 1) {
                arr.push(i);        //prime numbers pushed into a array arr,
            }
        }

        for (var i = 0; i < arr.length; i++) {
            for (var j = i + 1; j < arr.length; j++) {
                var a1 = '' + parseInt(arr[i]);
                var a2 = '' + parseInt(arr[j]);
                if ((((a1.split('')).sort()).join(',')) === (((a2.split('')).sort()).join(','))) //checking for anagram
                {
                    str = (a1 + " & " + a2);
                    arr1.push(str);
                    str = "";
                }
            }
        }
        for(var i=0; i<arr.length; i++)
        {
            q1.enqueue(arr[i]);
        }
        
        for(var j=0; j<arr1.length;j++)
        {
            q2.enqueue(arr1[j]);
        }
        console.log("Prime numbers between 0 and 1000 are==> ");
        console.log(q1.printque());
        console.log("Prime Anagram pairs between 0 and 1000 are==> ");
        console.log(q2.printque());
    },
}