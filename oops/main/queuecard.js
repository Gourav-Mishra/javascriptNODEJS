/****************************************************************************** 
 * 
 *  Purpose         :  LEARNING  (OOPS concept)
 *  @description    :
 *  @file           : PLAYING CARDS
 *  @module         : 
 *  @author         : BridgeLabz <GOURAV MISHRA>
 *  @since          : 11/09/2018
 *
 ******************************************************************************/
/**
 * @description playing cards are chosen randomly using random function .
 *              there are 4 players in the game,to every player a set of 9 cards are distribuited ramdomly.
 *              here object of player is made, in which further arrayobjects are made.
 */
var sort=require('/home/gourav/JAVASCRIPT/oops/main/sorting.js')
var card="";
var player={
    player1:[],
    player2:[],
    player3:[],
    player4:[],
    players:[],
    arr:["diamonds(♦)","spades(♠)","hearts(♥)","club(♣)"],
    arr1:["2","3","4","5","6","7","8","9","king","jack","queen","Ace"]
}
function rando(min,max)
{
    var ofset=min;
    var range=(max-min)+1
    var randomNumber=Math.floor(Math.random()*range)+ofset;
    return randomNumber;
}


for (i = 1; i <= 9; i++) 
{
    randomNumber = rando(0, player.arr.length - 1)
    randomItem = player.arr[randomNumber]
    randomNumber1 = rando(0, player.arr1.length - 1)
    randomItem1 = player.arr1[randomNumber1]
    var card = (randomItem + " " + randomItem1)
    player.player1.push(card)
    
}



for (i = 1; i <= 9; i++) 
{
    randomNumber = rando(0, player.arr.length - 1)
    randomItem =player. arr[randomNumber]
    randomNumber1 = rando(0, player.arr1.length - 1)
    randomItem1 = player.arr1[randomNumber1]
    var card = (randomItem + " " + randomItem1)
    player.player2.push(card)
    
}


for (i = 1; i <= 9; i++) 
{
    randomNumber = rando(0, player.arr.length - 1)
    randomItem =player. arr[randomNumber]
    randomNumber1 = rando(0, player.arr1.length - 1)
    randomItem1 = player.arr1[randomNumber1]
    var card = (randomItem + " " + randomItem1)
    player.player3.push(card)
    
}


for (i = 1; i <= 9; i++) 
{
    randomNumber = rando(0, player.arr.length - 1)
    randomItem = player.arr[randomNumber]
    randomNumber1 = rando(0,player. arr1.length - 1)
    randomItem1 = player.arr1[randomNumber1]
    var card = (randomItem + " of " + randomItem1)
    player.player4.push(card)
    
}
player.players.push(player.player1);
player.players.push(player.player2);
player.players.push(player.player3);
player.players.push(player.player4);
console.log(player.players)

