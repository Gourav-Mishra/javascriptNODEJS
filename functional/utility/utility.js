/******************************************************************************
 *  Execution       :   1. default node         
 *                      
 *  Purpose         :  LEARNING Functional programs
 * 
 *  @description    
 * 
 *  @file           : utility.js
 *  @overview       : hello.js , coin.js , leapcheck.js , powerof2.js , harmonicnumber.js ,primefactor.js ,gambler.js ,coupon.js , 2Darray.js , triplet.js , distance.js , permutation.js , stopwatch.js ,quadratic.js , windchill.js 
 *  @module         : utility
 *  @author         : BridgeLabz <GOURAV MISHRA>
 *  @version        : 1.0
 *  @since          : 20-08-2018
 *
 ******************************************************************************/

const _ = require("lodash")
module.exports = {
    /**
     *   NOTE- simple hello world program
     *        from user name is taken as input and message is displayed.
     */
    hello: function (userinput) {
        console.log("Hey " + userinput + " how are you");
    },
    /**
     * @param userinput - year is taken as input 
     * @description     - A year is a  leap Year if it is divisible by 4 and 400 
     *                    Every century year is not a leap year
     */
    leapcheck: function (userinput) {

        {
            if ((userinput % 4 === 0 && userinput % 100 !== 0 || userinput % 400 == 0))
        /** 
         *  Here  bitwise And operator can also be used.
         *  (userinput%400===0 & userinput%4===0)
         */ {
                console.log("Leap year");

            }
            else {

                console.log("Not a Leap year");
            }
        }


    },


    /** (COIN)
    * @param userinput - As user input, the number of times we want to flip the coin is taken.                 
    * @description - When a coin  is tossed eighter heads or tail comes
    *              - its non predictable so Random function can be used
    *              - randomFunction returnes value netween 0 and 1
    */

    coin: function (userinput) {
        let n = 0, x = 0, y = 0;

        for (let i = 1; i <= userinput; i++) {

            n = Math.random();

            if (n >= 0.5) {
                x++;
                console.log("head");
            }
            else {
                y++
                console.log("tail");
            }// if-else ends

        }// for loop ends
        var hp = (x / userinput) * 100;              // hp is headPercentage
        console.log("the head % is :" + hp + "%");
        var tp = (y / userinput) * 100;              //tp is tailPercentage
        console.log("the tail % is :" + tp + "%");
    },



    /** (POWER OF2)
    * @description Using Maths.pow function also the table of power of 2 can be calculated
    *              using logic also it can be done.
    * @param userinput the number upto which we need the table of 2 is taken as input.
    */
    powerof2: function (userinput) {
        var i, count, number;
        count = 1;
        for (i = 1; i <= userinput; i++) {
            number = 2 * count;
            console.log("2 ^ " + i + "=" + number);
            count = number;

        }// for loop ends
    },
    /**
     * @param userinput the harmonic value N is taken as input
     * @description its a series addition ,following a simple logic.
     */
    harmonic: function (userinput) {
        var sum = 0, i, j, n, c;
        for (i = 1; i <= userinput; i++) {
            sum += 1 / i;

        }// for loop ends
        console.log("the harmonic number is " + sum);
    },



    /**(GAMBLER)
     * @description  user will have a Starting balance using which he will start the game
     *               There is a goal set ,which is set by user, where the game will terminate
     *               the game will end if , the user has no money or he has reached goal.
     * @param userinput it is the number of times a player want to paly
     * @param startingbalance its the startingBalance ,the money with the player before every game.
     * @param goal it is the amount where the player will stop playing 
     * 
     */
    gambler: function (userinput, startingbalance, goal) {

        var startingbalance, goal, i;
        var win = 0, lost = 0;
        if (startingbalance >= 0 && startingbalance <= goal) {
            for (i = 1; i <= userinput; i++) {
                if (startingbalance < goal && startingbalance > 0) {
                    var n = Math.random();

                    if (n >= 0.5) {
                        win++;
                        console.log("WIN     so current balance= " + (++startingbalance));
                    }
                    else {
                        lost++;
                        console.log("LOST    so current balance= " + (--startingbalance));
                    }//sub inner if-else ends
                }
                else {
                    console.log("sorry <you have have no money> / <you have reached your goal> you cant play")
                }// inner if-else ends

            }// for loop ends


        }
        else {
            console.log("sorrry your startingBalance is less than your goal.");
        }// outer if-else ends 
        console.log("number of wins:" + win);
        console.log("number of loss:" + lost);
        console.log(" wins % :" + ((win / userinput) * 100));
        console.log(" loss % :" + ((lost / userinput) * 100));
        /** 
        * the number of wins and loss are printed
        * similarly the win % and loss % is printed.
        */

    },



    /** (PRIME FACTOR)
     *  @param number
     * here the input taken is from user
     * here we are using Math.sqrt function
     * 
     */
    primefactor: function (number) {
        var primeFactor = [];
        while (number % 2 == 0) {
            primeFactor.push(2);
            number = number / 2;
        }
        var sqrtnum = Math.sqrt(number);
        for (var i = 3; i <= sqrtnum; i++) {
            while (number % i == 0) {
                primeFactor.push(i);
                number = number / i;

            }
        }
        if (number > 2) {
            primeFactor.push(number);


        }
        console.log(primeFactor);
    },


    /**(COUPON)
     * @param min minimun number from which coupon number will start generating
     * @param max maximum number upto which coupon will be generated
     * NOTE -     Here i have used lodash to generate ramdom coupon numbers
     *            To use lodash first we have to install lodash ie: npm i lodash
     *          
     */
    coupon: function (min, max) {

        var random = [], i, n;
        for (i = min; i < max; i++) {


            n = _.random(min, max)

            random.push(n);
        }// for loop ends
        console.log(random);
        console.log("Number of coupon generated= " + random.length);
        var distinct = new Set(random);
        console.log(distinct);
        console.log("Number of distinct coupon " + [...distinct].length);
    },


    /**(DISTANCE)
     * distance form origin(0,0) to the (x,y) coordinate is calculated
     * from user  the (x,y) co-ordinate input is taken.
     * 
     */
    distance: function (x, y) {
        var x, y;
        if (x == 0 & y == 0) {
            console.log("Distance is: 0")

        }
        else {

            var distance = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
            console.log("The distance from:( " + x + "," + y + ") to ( 0,0 ) is: " + distance)

        }// if-else ends
    },



    /** (QUADRATIC)
     * @param a coefficient of x^2
     * @param b coefficient of x
     * @param c its a constant of the equation 
     * @param d it is the discriminant
     * @description - a,b,c Are the 3 coofficients of the quadrdatfic equation.             
     */
    quadratic: function (a, b, c) {
        var a, b, c, d;
        d = ((b * b) - (4 * a * c));
        console.log("discriminant: " + d);
        var x = ((-b) + Math.sqrt(d)) / 2 * a;
        var y = ((-b) - Math.sqrt(d)) / 2 * a;
        console.log("the 1 st root is :" + x);
        console.log("the 2 nd root is :" + y);

    },


    /**(WINDCHILL)
      *
      * @description In this temperature and velocity input is taken.
      * Temperature is in fahrenhite
      * 
      */
    windchill: function (temperature, velocity) {

        if (temperature > 50 && (velocity < 3 || velocity > 120)) {
            console.log("Sorry!!! it is not possible to calculate WINDCHILL with this data...please enter a valid input ")
        }
        else {
            var temp, windchill;
            temp = Math.pow(velocity, 0.16);
            windchill = 35.74 + (0.6215 * temperature) + (((0.4275 * temperature) - (35.75))) * temp// Calculating wind chill.
            console.log("the wind chill is:" + windchill)


        }
    },



    /**(STOPWATCH) :
     *  @description  Two function are defined getCurrentTime and getElapsedTime.
     *                From new Date() only the time is extracted using getTime().
     * @param startTime startingTime of the stopwatch
     * @param stopTime endingTime of the stopwatch
     * 
     * 
    */

    getCurrentTime: function () {
        var a = new Date();
        var n = a.getTime();
        return n;


    },
    /** 
    * @description here the extracted Time is in milliseconds.
    *              so to convert the required time to seconds it is devided by 1000.
    * @param startTime
    * @param stopTime
    * 
    */

    getElapsedTime: function (startTime, stopTime) {
        var e = (stopTime - startTime) / 1000;

        return e;
    },



    /**(TRIPLET):
    * @description Input is taken in array
    *              random inputs are taken,  only the group whose sum is 3 is returned
    *              distinct triplets are also extracted using set concept
    *  @param  read reads the readline statement in utility
    *  @param  val stores the size of the array input
    * 
    */

    triplet: function (read, val) {
        var arr = [], a = [];
        var count = 0;
        function findTriplet(val) {
            if (arr.length >= val) {
                for (var i = 0; i < val; i++) {
                    for (var j = i + 1; j < val; j++) {
                        for (k = j + 1; k < val; k++) {
                            if (Number(arr[i]) + Number(arr[j]) + Number(arr[k]) === 0) {
                                if ((Number(arr[i]) !== Number(arr[j]) !== Number(arr[k]))) {
                                    count++;
                                    console.log("triplet " + count + "  = {" + arr[i] + "," + arr[j] + "," + arr[k] + " ]")
                                    a.push(arr[i] + "," + arr[j] + "," + arr[k]);
                                }
                            }
                        }
                    }
                }
                var distinct = new Set(a);
                console.log(" The number of triplets = " + count);
                if ([...distinct].length === 0) {
                    console.log("NO distinct triplet found!!");

                }
                else {
                    console.log("Number of distinct triplet found= " + [...distinct].length);
                    console.log("Distinct triplets are: " + [...distinct])
                }
            } else {
                read.question(`Enter the ${(arr.length + 1)}th value : `, function (ele) {
                    arr.push(ele);
                    findTriplet(val);
                });

            }
        }
        findTriplet(val);
    },
    /**(TWO D ARRAY) 
     * @param read calling the read function from twoDarray
     * @param row enter the number of rows you want
     * @param col enter the no of cols you want
    */
    twoDarray: function (read, row, col) {
        var arr = [];
        var size = row * col;
        function array(size) {

            if (arr.length >= size) {

                var count = 0;
                var arr1 = [];
                var mat = '';
                for (var i = 0; i < row; i++) {
                    for (var j = 0; j < col; j++) {
                        mat = mat + arr[count] + '';
                        count++;
                    }//inner for ends
                    arr1.push(mat);
                    mat = ''
                }// outer for loop ends
                for (var index = 0; index < arr1.length; index++) {
                    console.log(arr1[index])
                }// for loop ends


            } else {
                read.question(`enter teh ${(arr.length)} th value:`, function (result) {
                    arr.push(result);
                    createArray(size);
                });
            }
        }
        createArray(size);


    },
    /** (2-D Array  using prompt)
    * @param row the number of rows we want as input 
    * @param promp input method
    *
    */
    array: function (prompt, row) {
        var arr = new Array(row);
        var col = prompt("enter no of column:");
        for (var i = 0; i < row; i++) {
            arr[i] = new Array(col);
            for (var j = 0; j < col; j++) {
                arr[i][j] = prompt('Enter element: ');
            }
        }
        console.log(arr);
    },
    /** (PERMUTATION)
     * @description permutation of string, returns all possible unique set of words which can be made from the given word
     * @param str   here a string is taken as input.
     */
    permutation: function (str) {
        var permutation = [];
        getPermutation(str, []);
        console.log(permutation);

        function getPermutation(str, arr) {
            if (typeof (str) == 'string') {

                str = str.split('');
            }// if ends
            if (str.length == 0) {
                permutation.push(arr.join(''));
            }
            for (var i = 0; i < str.length; i++) {
                var a = str.splice(i, 1);
                arr.push(a);
                getPermutation(str, arr);
                arr.pop();
                str.splice(i, 0, a);
            }// inner for loop ends
        }
    }
}

