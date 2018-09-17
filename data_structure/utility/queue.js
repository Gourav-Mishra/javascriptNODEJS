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
            var option = read.question("Enter 1 to Display Balance,\n      2 to Deposit Amount,\n      3 to Withdraw  Amount.\n      4 to EXIT")
            switch (option) {
                case '1': console.log("Your Account Ballance is: "+balance+"\n")
                break;

                case '2': var deposit = read.question("\nEnter the amount you want to Deposit in INR   ")
                    deposit = parseInt(deposit);
                    balance = balance + deposit;
                    console.log("Your NEW Balance= " + balance + " INR");
                    break;


                case '3': var withdraw = read.question("Enter the amount you want to withdraw in INR")
                    if (balance < withdraw) {
                        console.log("SORRY !!! Insufficient Funds...")

                    } else {
                        balance = balance - withdraw;
                        console.log("Your Balance  After Withdrawal is: " + balance + " INR")

                    }
                    break;
                    case '4': process.exit();

                default: console.log("Sorry :-( Your Request Cant be processed....")
            }
            queue.dequeue();
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