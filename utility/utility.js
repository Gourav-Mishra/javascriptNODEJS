const _ = require("lodash")
module.exports={
    hello : function(userinput)
    {
        
        console.log("type your user name");
        console.log("Hey "+userinput+ " how are you");
    },
leapcheck: function (userinput)
{
    
    {
        if (userinput%400===0 & userinput%4===0)
            {
                console.log("leap year");
        
            }
        else 
            {
    
                 console.log("not a leap year");
            }
    }
    
    
}
,
coin: function(userinput)
{
    let n=0,x=0,y=0,a,b;
    
    for(let i=1;i<=userinput;i++)
    {

         n=Math.random();
         //console.log(n);
         //console.log("the ramdom outputs are"+n);
         if(n>=0.5)
         {
             x++;
             console.log("head");
         }
         else
         {
             y++
             console.log("tail");
         }

    }
    var hp=(x/userinput)*100;
    console.log("the head % is :"+hp+"%");
    var tp=(y/userinput)*100;
    console.log("the tail % is :"+tp+"%");
},
powerof2:function(userinput)
{
    var i,count,number;
    count=1;
    for(i=1;i<=userinput;i++)
    {
        number=2*count;
        console.log("2 ^ "+i+"="+number);
        count=number;

    }
},
harmonic: function(userinput)
{
    var sum=0,i,j,n,c;
    for(i=1;i<=userinput;i++)
    {
        sum+=1/i;
        
    }
    console.log("the harmonic number is "+sum);
},
gambler: function(userinput,startingbalance,goal)
{
    
    var startingbalance,goal,i;
    var win=0,lost=0;
    if(startingbalance<=goal & startingbalance>=0)
    {
        for(i=1;i<=userinput;i++)
        {
            if(startingbalance<goal & startingbalance> 0)
            {
                 var n=Math.random();
                 
                 if(n>=0.5)
                 {
                    win++;
                    console.log("WIN     so current balance= "+(++startingbalance));
                 }
                 else
                {
                    lost++;
                    console.log("LOST    so current balance= "+(--startingbalance));
                }
            }
            else
            {
                console.log("sorry <you have have no money> / <you have reached your goal> you cant play")
            }

        }
        

    } 
    else
    {
        console.log("sorrry you cant play");
    }
    console.log("number of wins:"+win);
    console.log("number of loss:"+lost);
    console.log(" wins % :"+((win/userinput)*100));
    console.log(" loss % :"+((lost/userinput)*100));
    
},
primefactor:function(number)
{
    var primeFactor=[];
    while( number%2==0)
    {
        primeFactor.push(2);
        number=number/2;
    }
    var sqrtnum=Math.sqrt(number);
    for(var i=3;i<=sqrtnum;i++){
    while(number %i==0)
    {
        primeFactor.push(i);
        number=number/i;

    }
}
if(number>2)
{
    primeFactor.push(number);
    

}
console.log(primeFactor);



},
coupon :function(min,max)
{
    
    var random= [],i,n;
    for( i=min;i<max;i++)
    {
       
         
        n= _.random(min, max) 
       
        random.push(n);   
    }
    console.log(random);
    console.log("no. of coupon generated= "+random.length);
    var distinct=new Set(random);
   console.log( distinct);
    console.log("number of distinct coupon "+[...distinct].length);
    
   
 
   
},
distance: function(x,y)
{
    var x,y;
    if(x==0 & y==0)
        {
             console.log("Distance is: 0")
    
        }
    else
        {       

             var distance=Math.sqrt(Math.pow(x,2)+Math.pow(y,2));
             console.log("The distance from:( "+x +","+ y+") to ( 0,0 ) is: "+distance)

        }

},
quadratic: function(a,b,c)
{
    var a,b,c,d;
    d=((b*b)-(4*a*c));
    console.log("discriminant: "+d);
    var x= ((-b)+Math.sqrt(d))/2*a;
    var y= ((-b)-Math.sqrt(d))/2*a;
    console.log("the 1 st root is :"+x);
    console.log("the 2 nd root is :"+y);

},
windchill: function(temperature,velocity)
{
    
    if(temperature>50 && (velocity<3 || velocity>120))
    {
        console.log("Sorry!!! it is not possible to calculate WINDCHILL with this data...please enter a valid input ")
    }
    else
    {
        var temp,windchill;
        temp=Math.pow(velocity,0.16);
        windchill=35.74+(0.6215*temperature)+(((0.4275*temperature)-(35.75)))*temp// Calculating wind chill.
        console.log("the wind chill is:"+windchill)
        

    }
},
permutation: function(string)

{
   
    permutations=permute(mystring);
    if(string.length<2)
    return string;
    var permutations=[];

    for(var i=0;i<string.length; i++)
    {
        var char=string[i];
        if(string.indexOf(char)!=i)
        continue;
        var remainingString = string.slice(0,i) + string.slice(i+1,string.length); 

        for (var subPermutation of permute(remainingString))
            permutations.push(char + subPermutation)

    }
    return permutations;

},


   getCurrentTime: function(start)
   {
    var a=new Date();
    var n=a.getTime();
    return n;

    },
    getElapsedTime: function(stop)
    {
        var e= (stop-start)
        return e;
    }
}
