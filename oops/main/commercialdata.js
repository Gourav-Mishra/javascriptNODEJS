var fs = require('fs');
var data = fs.readFileSync(`company.json`)
var obj = JSON.parse(data)
var prompt = require('readline-sync');
fs.readFile('/home/gourav/JAVASCRIPT/oops/main/company.json', 'utf-8', function (err, data) {
	if (err) throw err
})
result=[];
//console.log(obj)
//console.log(result)

class stockAccount{
    constructor(name,share,price)
    {
        this.name=name;
        this.share=share;
        this.price=price;
    }

    view()
    {
            for(var key in obj)
            {
                key.push(result)
                console.log(result[i])
            }
    }
}
var stock=new stockAccount;


