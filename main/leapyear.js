function leapyear(n)
{
    if(n%400===0 && n&100!==0)
    {
        console.log("leap year");
    }  else if(n%4===0)
    {
            console.log("leap year");
    }
    else{ 
    console.log("not leapyear");

}
}

leapyear(2011)