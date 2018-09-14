var fs = require('fs');
var data = fs.readFileSync(`inventory.json`)
var obj = JSON.parse(data)
var prompt = require('readline-sync');
fs.readFile('/home/gourav/JAVASCRIPT/oops/main/inventory.json', 'utf-8', function (err, data) {
	if (err) throw err
})
function stock() {
	var option = prompt.question("Enter 1 to view your stock, \n      2 to Add elements in your stock, \n      3 to delete an Element in Stock")
	var sum = 0
	switch (option) {
		case "1": console.log(obj);
			break;

		case '2':

			var count = prompt.question("How many stock you want???...")
			for (var i = 0; i < count; i++) {
				var name = prompt.question("\n\nEnter The Stock Name: ")
				var numberofshare = prompt.question("Enter The Number of Share You Want To Purchace: ")
				var shareprice = prompt.question("enter the share price: ");

				obj.stock.push({
					"name": name,
					"numberofshare": numberofshare,
					"shareprice": shareprice,

				})
				sum += (shareprice * numberofshare)




				fs.writeFile('/home/gourav/JAVASCRIPT/oops/main/inventory.json', JSON.stringify(obj), 'utf-8', function (err) {
					if (err) throw err

				})

				console.log(obj)



			}
			console.log("\n\nThe Total Value Of The SStock's = " + sum)
			console.log(count + " STOCKS ADDED SUCESSFULLY")

			break;

		case '3':
			var del = prompt.question("enter the Index of stock you want to del: ")
			delete obj.stock[del]
			console.log(obj)
			fs.writeFile('/home/gourav/JAVASCRIPT/oops/main/inventory.json', JSON.stringify(obj), 'utf-8', function (err) {
				if (err) throw err
				console.log('Done!')
			})

			break;

	}



}
stock();