var read = require('readline-sync');
var fs = require('fs');
var dataC = fs.readFileSync('company.json')
var objC = JSON.parse(dataC)
var dataU = fs.readFileSync('user.json')
var objU = JSON.parse(dataU)

var date = new Date();
class StockAC {
    constructor(name, numberofshare, share_price) {
        this.name = name;
        this.numberofshare = numberofshare;
        this.share_price = share_price;
    }
    buy() {
        var countC = 0, symbol;
        console.log(objC);
        symbol = read.question("Enter the company index you want to purcase: ");
        amount = read.question("Enter the number of shares you want to buy: ");
        if (objC.stockC[symbol].numberofshare === 0) {
            console.log("Shares not available");

        } else {
            if (amount !== objC.stockC[symbol].numberofshare) {

                objU.stockU.push(objC.stockC[symbol]);

                console.log("Stock purchased successfully at " + date.getHours() + "hrs : " + date.getMinutes() + "mins : " + date.getSeconds() + "secs");
                objC.stockC[symbol].numberofshare = (objC.stockC[symbol].numberofshare - amount);
                fs.writeFile('/home/gourav/JAVASCRIPT/oops/main/company.json', JSON.stringify(objC), 'utf-8', function (err) {
                    if (err) throw err

                })
                fs.writeFile('/home/gourav/JAVASCRIPT/oops/main/user.json', JSON.stringify(objU), 'utf-8', function (err) {
                    if (err) throw err
                    console.log('Stock updated successfully!')
                })
                console.log(objC);
                for (var i = 0; i < objC.stockC.length; i++) {
                    console.log(`Total value of ${i}th stock= Rs.` + (objC.stockC[i].numberofshare * objC.stockC[i].shareprice))
                    countC = countC + (objC.stockC[i].numberofshare * objC.stockC[i].shareprice)
                }
                console.log("Total value of all stocks= Rs." + countC)
            }
            else {
                objU.stockU.push(objC.stockC[symbol]);
                fs.writeFile('/home/gourav/JAVASCRIPT/oops/main/user.json', JSON.stringify(objU), 'utf-8', function (err) {
                    if (err) throw err
                    console.log('Stock updated successfully!')
                })
                console.log("Stock purchased successfully at " + date.getHours() + "hrs : " + date.getMinutes() + "mins : " + date.getSeconds() + "secs");
                objC.stockC[symbol].numberofshare = (objC.stockC[symbol].numberofshare - amount);
                fs.writeFile('/home/gourav/JAVASCRIPT/oops/main/company.json', JSON.stringify(objC), 'utf-8', function (err) {
                    if (err) throw err

                })

                console.log(objC);
                for (var i = 0; i < objC.stockC.length; i++) {
                    console.log(`Total value of ${i}th stock= Rs.` + (objC.stockC[i].numberofshare * objC.stockC[i].shareprice))
                    countC = countC + (objC.stockC[i].numberofshare * objC.stockC[i].shareprice)
                }
                console.log("Total value of all stocks= Rs." + countC)

            }
        }
    }

    sell() {
        console.log(objC);
        var count = read.question("Enter number of stocks you want to sell: ")
        for (var i = 0; i < count; i++) {
            var name = read.question("Enter the stock name: ")
            var numberofshare = read.question("Enter the number of share you want to purchace: ")
            var shareprice = read.question("Enter the share price: ");

            objC.stockC.push({
                name: name,
                numberofshare: numberofshare,
                shareprice: shareprice,

            })
            fs.writeFile('/home/gourav/JAVASCRIPT/oops/main/company.json', JSON.stringify(objC), 'utf-8', function (err) {
                if (err) throw err
                console.log("Stocks updated successfully");
            })
            console.log(objC)
        }
        console.log("Stocks sold successfully at " + date.getHours() + "hrs : " + date.getMinutes() + "mins : " + date.getSeconds() + "secs");
    }
}




var s = new StockAC();
console.log("1: View stock");
console.log("2: Buy stock");
console.log("3: Sell Stock");

var choice = read.question("Please enter your choice: ");
var arrayOfObjects, totalPrice = 1, amount = 0, report = [];

switch (parseInt(choice)) {
    case 1:
   console.log("\nCompany Account Stock: ");
                        
        console.log(objC);
        console.log("\nUser account Stock: ");
        console.log(objU);
        
         break;
         
    case 2:
        s.buy();
        break;

    case 3:
        s.sell();
        break;

    default:
        console.log("Invalid Input!");
        break;
}